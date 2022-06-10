from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in new_app_1/__init__.py
from new_app_1 import __version__ as version

setup(
	name="new_app_1",
	version=version,
	description="app",
	author="app",
	author_email="app",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
