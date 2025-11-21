from ml_api.model.schemas import Input, Output, ModelPredict
from ml_api.services.transform_input_with_one_hot_encoder import transform
import numpy as np

def predict(model, input_data: Input) -> Output:
    try:
        data_transformed: ModelPredict = transform(input_data)
        prediction_result = model.predict(
            np.array(data_transformed.predic_data).reshape(1, -1)
        )
        
        return Output(predict=prediction_result)
    except Exception as e:
        raise e
    
    