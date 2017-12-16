GNU_MIRROR := http://ftp.kaist.ac.kr/gnu

NODE_PLATFORM := node-v$(NODE_VERSION)-darwin-x64
GPP_PLATFORM := gcc-$(GPP_VERSION)
GO_PLATFORM := go$(GO_VERSION).darwin-amd64

NODE_TARBALL := $(NODE_PLATFORM).tar.gz
GPP_TARBALL := $(GPP_PLATFORM).tar.xz
GO_TARBALL := $(GO_PLATFORM).tar.gz

all: \
	check-env \
	node-$(NODE_VERSION) \
	g++-$(GPP_VERSION) \
	go-$(GO_VERSION)

check-env:
ifndef NODE_VERSION
	$(error NODE_VERSION is not defined)
endif
ifndef GPP_VERSION
	$(error GPP_VERSION is not defined)
endif
ifndef GO_VERSION
	$(error GO_VERSION is not defined)
endif

node-$(NODE_VERSION):
	wget https://nodejs.org/dist/v0.10.48/$(NODE_TARBALL)
	tar -xf $(NODE_TARBALL)
	mv $(NODE_PLATFORM)/bin/node ./node-$(NODE_VERSION)
	rm -rf $(NODE_PLATFORM)
	rm $(NODE_TARBALL)

g++-$(GPP_VERSION):
ifeq ($(GPP_VERSION), local)
	ln -s `which g++` g++-local
else
	wget $(GNU_MIRROR)/gcc/$(GPP_PLATFORM)/$(GPP_TARBALL)
	tar -xf $(GPP_TARBALL) -s /^$(GPP_PLATFORM)/$(GPP_PLATFORM)-temp/
	cd $(GPP_PLATFORM)-temp; \
	./contrib/download_prerequisites; \
	mkdir build && cd ./build; \
	../configure --prefix=$(CURDIR)/$(GPP_PLATFORM); \
	make -j4; \
	make install
	ln -s $(GPP_PLATFORM)/bin/g++ ./g++-$(GPP_VERSION)
	rm -rf $(GPP_PLATFORM)-temp
	rm $(GPP_TARBALL)
endif

go-$(GO_VERSION):
	wget https://redirector.gvt1.com/edgedl/go/$(GO_TARBALL)
	tar -xf $(GO_TARBALL) -s /^go/$(GO_PLATFORM)/
	ln -s $(GO_PLATFORM)/bin/go ./go-$(GO_VERSION)
	rm $(GO_TARBALL)

clean:
	rm node-$(NODE_VERSION)
	rm g++-$(GPP_VERSION)
	rm go-$(GO_VERSION)