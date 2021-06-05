namespace $.$$ {
	
	const {rem} = $mol_style_unit
	
	$mol_style_define( $psb_portal, {

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
