from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Configure CORS
origins = ["*"]  # Allow all origins for development; restrict in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class CartItem(BaseModel):
    id: int
    name: str
    price: float
    description: str
    image: str
    quantity: int

class Customer(BaseModel):
    fullName: str
    email: str
    password: str
    city: str

class Order(BaseModel):
    items: List[CartItem]
    customer: Customer 

     


@app.get("/foods")
async def get_foods():
    try:
        with open("data/foods.json", "r") as f:
            foods = json.load(f)
        return foods
    except FileNotFoundError:
         raise HTTPException(status_code=404, detail="Data file not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid JSON format")
    

@app.post("/orders")
async def create_order(order: Order):
    order_dict = order.dict()
    try:
        try:
            with open("data/orders.json", "r") as f:
                orders = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            orders = []
        orders.append(order_dict)
        with open("data/orders.json", "w") as f:
            json.dump(orders, f, indent=4)
        return {"message": "Order placed successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to write to orders file: {e}")

    

