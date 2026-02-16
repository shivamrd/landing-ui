import os
import hashlib
from jose import jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta
from dotenv import load_dotenv
from pathlib import Path

# Load .env properly
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

SECRET_KEY = os.getenv("SECRET_KEY")

if not SECRET_KEY:
    raise ValueError("SECRET_KEY not found in .env")

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 1

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# 🔐 Hash Password (Safe from 72 byte bcrypt issue)
def hash_password(password: str):
    # Convert to SHA256 first (industry trick)
    password = hashlib.sha256(password.encode()).hexdigest()
    return pwd_context.hash(password)


# 🔐 Verify Password
def verify_password(plain_password: str, hashed_password: str):
    plain_password = hashlib.sha256(plain_password.encode()).hexdigest()
    return pwd_context.verify(plain_password, hashed_password)


# 🎫 Create JWT Token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
