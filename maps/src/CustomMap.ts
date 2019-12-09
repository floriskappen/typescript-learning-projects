export interface Mappable {
    location: {
        lat: number
        lng: number
    }
    markerContent(): string
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
        }
    })

    //! Solution 1: Duplicate the code for each instance (BAD)
    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }

    //! Solution 2: use the | operator. Not very scalable etc (BAD)
    // addMarker(mappable: User | Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         }
    //     })
    // }

    //! Solution 3: Use an interface (GOOD)
    function addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener( 'click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open( this.googleMap, marker )
        })
    }
}