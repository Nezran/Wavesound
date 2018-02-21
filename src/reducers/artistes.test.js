import artistes from './artistes'

const initialState ={
    isFetching: false,
    items: []
}


// Test l'initial reducer
// Test l'action REQUEST_ARTISTS
describe('Artistes reducer', () => {
    it('Doit retourner the initial state', () => {
        expect(artistes(undefined, {})).toEqual(
            initialState
        )
    })

    it('Execute l action REQUEST_ARTISTS', () => {
        expect(
            artistes([], {
                type: 'REQUEST_ARTISTS',
            })
        ).toEqual(
            {
                isFetching: true,
            }
        )
    })
})