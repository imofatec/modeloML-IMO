FROM python:3.13-slim AS build

ENV POETRY_VERSION=2.2.1 \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

ENV PATH="$VENV_PATH/bin:$PATH"

RUN pip install "poetry==$POETRY_VERSION"

WORKDIR $PYSETUP_PATH

COPY poetry.lock pyproject.toml ./
RUN poetry install --no-root

COPY . .

FROM python:3.13-slim AS runtime

ENV POETRY_VERSION=2.2.1 \
    POETRY_HOME="/opt/poetry" \
    VENV_PATH="/opt/pysetup/.venv" \
    PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH" \
    POETRY_NO_INTERACTION=1 \
    PYTHONPATH="/app/src"

WORKDIR /app

RUN pip install "poetry==$POETRY_VERSION"

COPY --from=build /opt/pysetup/.venv /opt/pysetup/.venv
COPY --from=build /opt/pysetup/ /app

ENTRYPOINT ["poetry", "run", "uvicorn", "ml_api.app.app:app", "--host", "0.0.0.0", "--port", "8000"]

