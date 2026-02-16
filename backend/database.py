import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

# Get absolute path to .env inside backend folder
env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

MONGO_URL = os.getenv("MONGO_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

print("Loaded MONGO_URL:", MONGO_URL)
print("Loaded DATABASE_NAME:", DATABASE_NAME)

if not DATABASE_NAME:
    raise ValueError("DATABASE_NAME is missing in .env file")

client = AsyncIOMotorClient(MONGO_URL)
database = client[DATABASE_NAME]
