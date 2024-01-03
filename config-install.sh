#!/usr/bin/env bash

set -e


################################################################################
### Head: vimix
##

vimix_config_install () {

	echo
	echo "##"
	echo "## Config: vimix"
	echo "##"
	echo


	vimix_config_install_by_dir

	#vimix_config_install_by_each_file


	echo

}

vimix_config_install_by_dir () {


	echo
	echo "mkdir -p ${HOME}"
	mkdir -p "${HOME}"


	echo
	echo "cp -rf ./asset/overlay/etc/skel/. ${HOME}"
	cp -rf "./asset/overlay/etc/skel/." "${HOME}"



}

vimix_config_install_by_each_file () {

	return 0

	echo
	echo "mkdir -p ${HOME}/.config"
	mkdir -p "${HOME}/.config"

	echo
	echo "mkdir -p ${HOME}/.local/share/vimix"
	mkdir -p "${HOME}/.local/share/vimix"

	echo
	echo "install -Dm644 ./asset/overlay/etc/skel/.local/share/vimix/Main.colorscheme ${HOME}/.local/share/vimix/Main.colorscheme"
	install -Dm644 "./asset/overlay/etc/skel/.local/share/vimix/Main.colorscheme" "${HOME}/.local/share/vimix/Main.colorscheme"


}

##
### Tail: vimix
################################################################################


################################################################################
### Head: config_install
##

main_config_install () {

	vimix_config_install

}

##
### Tail: config_install
################################################################################


################################################################################
### Head: Main
##

__main__ () {

	main_config_install

}

##
## Start
##
__main__

##
### Tail: Main
################################################################################
