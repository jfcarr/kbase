# Requirements Files for Python

In Python, a requirements.txt file is used to keep track of the modules and packages used in a project.

## Create a requirements.txt File

```bash
pip freeze > requirements.txt
```

## Install Packages from requirements.txt

```bash
pip install -r requirements.txt
```

## Maintain a requirements.txt File

See which packages are out of date:

```bash
pip list --outdated
```

Update package(s), as needed:

```bash
pip install -U package_name
```

Generate a new requirements.txt file:

```bash
pip freeze > requirements.txt
```
