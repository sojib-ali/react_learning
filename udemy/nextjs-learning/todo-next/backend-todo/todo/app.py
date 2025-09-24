import contextlib
from fastapi import FastAPI, Depends, HTTPException, status
from .database import create_all_tables, get_async_session
from sqlalchemy.ext.asyncio import AsyncSession
from .models import Task
from sqlalchemy import select
from . import schemas
from collections.abc import Sequence
from fastapi.middleware.cors import CORSMiddleware


@contextlib.asynccontextmanager
async def lifespan(app:FastAPI):
    await create_all_tables()
    yield

app = FastAPI(lifespan = lifespan)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def welcome():
    return {"message": "Hello"}

async def get_task_or_404(
        id: int, session: AsyncSession = Depends(get_async_session)
) -> Task:
    select_query = select(Task).where(Task.id == id) #type ignore
    result = await session.execute(select_query)
    task = result.scalar_one_or_none() # type: ignore

    if task is None:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND)
    
    return task
    


@app.get("/tasks", response_model = list[schemas.Task])
async def task_list(
    session: AsyncSession = Depends(get_async_session),
) -> Sequence[Task]:
    select_query = select(Task)
    result = await session.execute(select_query)
    task = result.scalars().all()

    return task

@app.get("/tasks/{id}", response_model = schemas.Task)
async def get_task(task: Task = Depends(get_task_or_404)) -> Task:
    return task

    
    

@app.post("/tasks", response_model = schemas.Task, status_code=status.HTTP_201_CREATED)
async def create_task(
    task_create: schemas.TaskCreate, session: AsyncSession = Depends(get_async_session)
) -> Task:
    task = Task(**task_create.model_dump())
    session.add(task)
    await session.commit()
    await session.refresh(task)
    return task


@app.patch("/tasks/{id}", response_model = schemas.Task)
async def update_task(
    task_update: schemas.TaskUpdate,
    task: Task = Depends(get_task_or_404),
    session: AsyncSession = Depends(get_async_session),
)-> Task:
    task_update_dict = task_update.model_dump(exclude_unset=True)
    for key, value in task_update_dict.items():
        setattr(task, key, value)

    session.add(task)
    await session.commit()
    await session.refresh(task)

    return task

@app.delete("/posts/{id}", status_code = status.HTTP_204_NO_CONTENT)
async def delete_task(
    task: Task = Depends(get_task_or_404),
    session: AsyncSession = Depends(get_async_session),
):
    await session.delete(task)
    await session.commit()



