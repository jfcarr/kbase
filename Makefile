default:
	@echo 'Targets:'
	@echo '  build'
	@echo '  serve'

build:
	mdbook build

serve:
	mdbook serve
	