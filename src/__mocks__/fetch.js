export default function() {
    return Promise.resolve({
        json: () =>
            Promise.resolve([
            {
                id: 1,
                name: 'Movie 1'
            },
            {
                id: 2,
                name: 'Movie 2'
            }
        ])

    })
}
