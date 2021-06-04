namespace $.$$ {

	export class $psb_portal extends $.$psb_portal {

		app() {
			return this.$.$mol_state_arg.value( 'app' )
		}
		
		@ $mol_mem
		menu_items() {
			return Object.keys( this.data() ).map( app => this.Menu_item( app ) )
		}
		
		pages() {
			const app = this.app()
			return [
				this.Menu(),
				... app ? [ this.App( app ) ] : [],
			]
		}
		
		app_title( app: string ) {
			return this.data()[ app ].title
		}

		@ $mol_mem_key
		app_uri( app: string, next?: string ) {
			const suffix =  '/mol_lights=' + ( this.$.$mol_lights() ? 'on' : 'off' )
			if( this.app() === app ) {
				if( next ) next = next.replace( /\/mol_lights=(on|off)/, '' )
				const uri = this.$.$mol_state_arg.value( 'uri', next  )
				return ( uri ?? this.data()[ app ].uri ) + suffix
			} else {
				return this.data()[ app ].uri + suffix
			}
		}

		app_arg( app: string ) {
			return { app, uri: null }
		}

	}

}
