from ml_api.services.predict_service import predict
from ml_api.services.open_model_service import load_model
from ml_api.model.schemas import Input, Output, ModelPredict
import pytest
from pydantic import ValidationError


input_data: Input = Input(
    course_level="BEGGINER",
    lessons_count=10,
    course_categories="CLOUD",
    user_academic_level="TECHNICAL",
    user_level="INTERMEDIATE",
    user_available_time="ONE_TO_TWO_HOURS",
    user_interest_categories1="AI",
    user_interest_categories2="CLOUD",
    lessons_watched=10
)


def test_load_model():
    
    model = load_model()
    assert model is not None

def test_predict_success():
    model = load_model()
    result = predict(model, input_data)
    
    assert result is not None
    assert isinstance(result, Output)
    assert isinstance(result.predict, float)
    assert result.predict is not None
    
def test_with_missing_required_field():
    
    with pytest.raises(Exception):
        Input(
            course_level="BEGGINER",
            lessons_count=10,
            course_categories="CLOUD",
            user_academic_level="TECHNICAL",
            user_level="INTERMEDIATE",
            user_available_time="ONE_TO_TWO_HOURS",
            user_interest_categories1="AI",
            user_interest_categories2="CLOUD"
        )

def test_input_with_invalid_lessonsWatched_value():
    
    model = load_model()
    
    with pytest.raises(ValidationError, match="Aulas assistidas nao podem ser maiores que a quantidade total de aulas"):
    
        invalid_input_data = Input(
            course_level="BEGGINER",
            lessons_count=10,
            course_categories="CLOUD",
            user_academic_level="TECHNICAL",
            user_level="INTERMEDIATE",
            user_available_time="ONE_TO_TWO_HOURS",
            user_interest_categories1="AI",
            user_interest_categories2="CLOUD",
            lessons_watched=15
        )
        
        predict(model, invalid_input_data) 
        