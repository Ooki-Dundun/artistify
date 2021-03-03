require("../../config/mongo");
const AlbumModel = require("../../models/Album");

const albums = [
    {
        title: "Album test 1 with artist and label seeded",
        artist: "603ede1565af3383d8ba3525",
        label: "603ec5d0e13c7a69c45280dc",
        cover: "https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FRT%2FOY%2FMY-2500257%2Fmetallic-photo-album-cover-500x500.png&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fmetallic-photo-album-cover-3811928591.html&tbnid=gHjv9npVxTrR4M&vet=12ahUKEwjN29SZuZHvAhXZwoUKHfzKDSkQMygAegUIARDZAQ..i&docid=g0Z6VHp3EJOS9M&w=500&h=500&q=album%20image&ved=2ahUKEwjN29SZuZHvAhXZwoUKHfzKDSkQMygAegUIARDZAQ"
    },
    {
        title: "Album test 2 with artist and label seeded",
        artist: "603ede1565af3383d8ba3525",
        label: "603ec5d0e13c7a69c45280dc",
        cover: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.albumsremembered.com%2Fwp-content%2Fuploads%2F2018%2F10%2FAlbumsRemembered_Product-acrylic-sq.jpg&imgrefurl=https%3A%2F%2Fwww.albumsremembered.com%2Falbums%2Facrylic-wedding-album&tbnid=qGigcTa-bSFShM&vet=12ahUKEwij5Pr8uZHvAhWC0oUKHeMSCCoQMygBegUIARCXAQ..i&docid=4L1fxDAYeBX2dM&w=1400&h=1400&itg=1&q=album%20image&hl=en&ved=2ahUKEwij5Pr8uZHvAhWC0oUKHeMSCCoQMygBegUIARCXAQ"
    },
    {
        title: "Album test 3 - no artist, no label",
        cover: "https://www.google.com/imgres?imgurl=http%3A%2F%2Falbumdelhi.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fsilky-matt2-300x200.jpg&imgrefurl=https%3A%2F%2Falbumdelhi.com%2Fcanvera-album-sheet-types%2F&tbnid=NeiowkdGRmSdCM&vet=12ahUKEwij5Pr8uZHvAhWC0oUKHeMSCCoQMygGegUIARChAQ..i&docid=qI5meAz0gtFB0M&w=300&h=200&itg=1&q=album%20image&hl=en&ved=2ahUKEwij5Pr8uZHvAhWC0oUKHeMSCCoQMygGegUIARChAQ"
    }
]

AlbumModel.insertMany(albums)
.then((albums) => console.log(albums))
.catch((err) => next(err));