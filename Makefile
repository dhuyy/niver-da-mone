all:
	cd build && \
	git init && \
	git add -A && \
	git commit -m "Deploy Static Website" && \
	git branch -M main && \
	git remote add origin git@github.com:dhuyy/niver-da-mone.site.git && \
	git push -u --force origin main