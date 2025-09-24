from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str

    class Config:
        from_attributes = True

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int

class TaskUpdate(TaskBase):
    pass
