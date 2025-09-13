from sqlalchemy.types import Integer, String, Text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(Integer, primary_key = True, autoincrement = True)
    title: Mapped[str] = mapped_column(String(255), nullable = False)
    description: Mapped[str] = mapped_column(Text, nullable = False)
