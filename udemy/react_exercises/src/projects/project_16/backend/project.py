from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Configure CORS
origins = ["*"]  # Allow all origins for development; restrict in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/foods")
async def get_foods():
    try:
        with open("data/foods.json", "r") as f:
            foods = json.load(f)
        return foods
    except FileNotFoundError:
        return {"error": "Data file not found"}, 404
    except json.JSONDecodeError:
        return {"error": "Invalid JSON format"}, 500
