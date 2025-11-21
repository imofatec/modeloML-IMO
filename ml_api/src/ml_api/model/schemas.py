from pydantic import BaseModel, field_validator
from typing import List

class Input(BaseModel):
    course_level: str
    lessons_count: int
    course_categories: str
    user_academic_level: str
    user_level: str
    user_available_time: str
    user_interest_categories1: str
    user_interest_categories2: str
    lessons_watched: int
    
    @field_validator('lessons_watched')
    @classmethod
    def validate_lessons_watched(cls, lessons_watched, info):
        lessons_count = info.data.get('lessons_count')
        if lessons_watched > lessons_count:
            raise ValueError('Aulas assistidas nao podem ser maiores que a quantidade total de aulas')
        return lessons_watched
 
class ModelPredict(BaseModel):
    predic_data: List  
    
    
class Output(BaseModel):
    predict: float