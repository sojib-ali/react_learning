from sqlalchemy.types import Integer, String, Text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class Task(Base):
    __tablename__ = "task"

    id: Mapped[int] = mapped_column(Integer, primary_key = True, autoincrement = True)
    title: Mapped[str] = mapped_column(String(255), nullable = False)
