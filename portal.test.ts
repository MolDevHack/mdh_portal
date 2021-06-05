namespace $.$$ {
	
	$mol_test({
		
		'Enable lights in apps'( $ ) {
			
			const app = new $psb_portal
			
			app.$ = $.$mol_ambient({
				$mol_lights: ()=> true,
			})
			
			app.data = ()=> ({
				test: {
					uri: 'https://example.org/#',
				},
			}) as any
			
			$mol_assert_equal(
				app.app_uri( 'test' ),
				'https://example.org/#/mol_lights=on',
			)
			
		},
		
		'Disable lights in apps'( $ ) {
			
			const app = new $psb_portal
			
			app.$ = $.$mol_ambient({
				$mol_lights: ()=> false,
			})
			
			app.data = ()=> ({
				test: {
					uri: 'https://example.org/#',
				},
			}) as any
			
			$mol_assert_equal(
				app.app_uri( 'test' ),
				'https://example.org/#/mol_lights=off',
			)
			
		},
		
	})
	
}
