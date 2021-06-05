namespace $.$$ {
	
	const {rem} = $mol_style_unit
	const {url} = $mol_style_func
	
	$mol_style_define( $psb_portal, {
		
		Placeholder: {
			background: {
				image: [[ url( 'https://habrastorage.org/webt/dp/mm/jz/dpmmjzzibmacgk4547w_sdghy6i.png' ) ]],
				repeat: 'no-repeat',
				position: 'center',
			},
		},

		Menu: {
			
			flex: {
				grow: 0,
				shrink: 0,
				basis: rem(20),
			},
			
			Title: {
				flex: {
					basis: 'auto',
				}
			},
			
			Body: {
				padding: 0,
				justifyContent: 'space-between',
			},
			
		},

		Logo: {
			margin: {
				left: rem(.75),
			},
		},

		Menu_items: {
			padding: $mol_gap.block,
		},

		Menu_link_in: {
			flex: {
				grow: 1,
			},
		},

		App: {
			flex: {
				grow: 1,
				shrink: 0,
				basis: rem(25),
			},
		},

		Stats: {
			flex: {
				grow: 0,
				shrink: 1,
				basis: rem(20),
			},
			padding: 0,
		},

	} )

}
