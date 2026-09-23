# Virtual Environment for Python

> The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.
>
> <https://docs.python.org/3/library/venv.html>

## Initialize the Environment

```bash
python3 -m venv /path/to/new/virtual/environment
```

## Activate the Environment

```bash
cd /path/to/new/virtual/environment

source ./bin/activate
```

## Deactivate the Environment

```bash
deactivate
```

## Bash Prompt

Bash prompt, normal:

```txt
username@hostname:~/current/path$
```

Bash prompt, with virtual environment activated:

```txt
(current_dir) username@hostname:~/current/path$
```
