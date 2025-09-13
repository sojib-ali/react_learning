import contextlib
from fastapi import FastAPI, Depends, HTTPException, status
from database import create_all_tables, get_async_session
from sqlalchemy.ext.asyncio import AsyncSession
from models import Product
from sqlalchemy.orm import selectinload
from sqlalchemy import select
import schemas
from collections.abc import Sequence

@contextlib.asynccontextmanager
async def lifespan(app:FastAPI):
    await create_all_tables()
    yield

app = FastAPI(lifespan = lifespan)

@app.get("/")
def welcome():
    return {"message": "Hello"}

async def get_product_or_404(
        id: int, session: AsyncSession = Depends(get_async_session)
) -> Product:
    select_query = select(Product).where(Product.id == id) #type ignore
    result = await session.execute(select_query)
    product = result.scalar_one_or_none()

    if product is None:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND)
    
    return product
    


@app.get("/products", response_model = list[schemas.ProductRead])
async def list_products(
    session: AsyncSession = Depends(get_async_session),
) -> Sequence[Product]:
    select_query = select(Product)
    result = await session.execute(select_query)
    product = result.scalars().all()

    return product

@app.get("/product/{id}", response_model = schemas.ProductRead)
async def get_product(product: Product = Depends(get_product_or_404)) -> Product:
    return product

    
    

@app.post("/products", response_model = schemas.ProductRead, status_code=status.HTTP_201_CREATED)
async def create_post(
    product_create: schemas.ProductCreate, session: AsyncSession = Depends(get_async_session)
) -> Product:
    product = Product(**product_create.model_dump())
    session.add(product)
    await session.commit()

    return product

