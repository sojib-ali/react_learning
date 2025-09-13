from pydantic import BaseModel

class ProductBase(BaseModel):
    title: str
    description: str

    class Config:
        orm_mode = True

class ProductCreate(ProductBase):
    id: int

class ProductRead(ProductBase):
    id: int