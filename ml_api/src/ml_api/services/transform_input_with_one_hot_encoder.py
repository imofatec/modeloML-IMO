from ml_api.model.schemas import Input, ModelPredict
from typing import List

course_level = {
    'BEGINNER':0,
    'INTERMEDIATE':1,
    'ADVANCED':2
}

academic_level_map = {
    'NONE': 0,
    'TECHNICAL': 1,
    'ASSOCIATE': 1,
    'BACHELOR': 2,
    'LICENTIATE': 2,
    'MBA': 3,
    'MASTER': 4,
    'DOCTORAL': 5,
    'POSTDOC': 6
}

user_level_map = {
    'BEGINNER': 0,
    'INTERMEDIATE': 1,
    'ADVANCED': 2,
    'EXPERT': 3,
}

user_time_map = {
    'LESS_THAN_ONE_HOUR': 0,
    'ONE_TO_TWO_HOURS': 1,
    'TWO_TO_FOUR_HOURS': 2,
    'MORE_THAN_FOUR_HOURS': 3,
}

course_category = {
    'AI':1,
    'CLOUD':1,
    'DATA':1,
    'DEV_MOBILE':1,
    'DEV_WEB':1,
    'SECURITY':1
}

userInterestCategory1 = {
    'AI':1,
    'CLOUD':1,
    'DATA':1,
    'DEV_MOBILE':1,
    'DEV_WEB':1,
    'SECURITY':1
}

userInterestCategory2 = {
    'AI':1,
    'CLOUD':1,
    'DATA':1,
    'DEV_MOBILE':1,
    'DEV_WEB':1,
    'SECURITY':1
}


def transform_course_level(lista: List[float],input: Input):
    course_level_transformed = course_level.get(input.course_level)
    lista.append(course_level_transformed)


def transform_academic_level_map(lista: List[float], input: Input):
    academic_level_map_transformed = academic_level_map.get(input.user_academic_level)
    lista.append(academic_level_map_transformed)

def transform_user_level_map(lista: List[float],input: Input):
    user_level_map_transformed = user_level_map.get(input.user_level)
    lista.append(user_level_map_transformed)


def transform_user_time_map(lista: List[float],input: Input):
    user_time_map_transformed = user_time_map.get(input.user_available_time)
    lista.append(user_time_map_transformed)

def get_course_lessons_count(lista: List[float],input: Input):
    lista.append(input.lessons_count)


def get_lessonsWatchedCount(lista: List[float],input: Input):
    lista.append(input.lessons_watched)


def get_completition_rate(lista: List[float],input: Input):
    completition_rate = round((input.lessons_watched / input.lessons_count), 3)
    lista.append(completition_rate)


def one_hot_encoder_course_category(lista: List[float],input: Input):
    one_hot = []

    for categoria in course_category.keys():
        if categoria == input.course_categories:
            one_hot.append(1)
        else:
            one_hot.append(0)
    
    for value in one_hot:
        lista.append(value)
        


def one_hot_encoder_course_category1(lista: List[float],input: Input) -> int:
    one_hot = []

    for categoria in course_category.keys():
        if categoria == input.user_interest_categories1:
            one_hot.append(1)
        else:
            one_hot.append(0)
    
    for value in one_hot:
        lista.append(value)
   


def one_hot_encoder_course_category2(lista: List[float],input: Input) -> int:
    one_hot = []

    for categoria in course_category.keys():
        if categoria == input.user_interest_categories2:
            one_hot.append(1)
        else:
            one_hot.append(0)
    
    for value in one_hot:
        lista.append(value)
    


def transform(input: Input) -> ModelPredict:
    
    full_data = []
    
    transform_course_level(full_data,input)
    get_course_lessons_count(full_data, input)
    transform_academic_level_map(full_data,input)
    transform_user_level_map(full_data,input)
    transform_user_time_map(full_data,input)
    get_lessonsWatchedCount(full_data,input)
    get_completition_rate(full_data,input)
    one_hot_encoder_course_category(full_data,input)
    one_hot_encoder_course_category1(full_data,input)
    one_hot_encoder_course_category2(full_data,input)
   
    return ModelPredict(predic_data=
        full_data
    )
    

