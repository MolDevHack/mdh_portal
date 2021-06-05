namespace $.$$ {
	
	$mol_test({
		
		'Enable lights in apps'( $ ) {
			
			const app = new $psb_portal
			
			app.$ = $.$mol_ambient({
				$mol_lights: ()=> true,
			})
			
			$mol_assert_equal(
				app.app_uri( 'tech' ),
				'https://mol.hyoo.ru/#/mol_lights=on',
			)
			
		},
		
		'Disable lights in apps'( $ ) {
			
			const app = new $psb_portal
			
			app.$ = $.$mol_ambient({
				$mol_lights: ()=> false,
			})
			
			$mol_assert_equal(
				app.app_uri( 'tech' ),
				'https://mol.hyoo.ru/#/mol_lights=off',
			)
			
		},
		
	})
	
}
