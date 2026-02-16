from fastapi import APIRouter, HTTPException
from database import database
from models.user import UserCreate, UserLogin
from utils.auth import hash_password, verify_password, create_access_token

router = APIRouter()

@router.post("/register")
async def register(user: UserCreate):
    existing_user = await database.users.find_one({"email": user.email})

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_pw = hash_password(user.password)

    await database.users.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_pw
    })

    return {"message": "User registered successfully"}


@router.post("/login")
async def login(user: UserLogin):
    db_user = await database.users.find_one({"email": user.email})

    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": db_user["email"]})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
