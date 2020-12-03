const getFiles = {
    id: "get-files",
    url: "/api/files",
    method: "GET",
    response: {
        status: 200,
        body: [
            {
                type: "folder",
                id: "ncs93f23f892n3fnf3f2", // uuid
                owner: "1fsdnf23ifn23", // user uuid
                permissions: {
                    read: true,
                    write: false,
                },
                name: "images",
                absolutePath: "/images",
            },
        ],
    },
};

const getFilesImages = {
    id: "get-files-images",
    url: "/api/files/images",
    method: "GET",
    response: {
        status: 200,
        body: [
            {
                type: "file",
                id: "f949384jc9384jc349f", // uuid
                owner: "1", // user uuid
                fileType: "image",
                imageType: "jpg",
                name: "test",
                extension: "jpg",
                absolutePath: "/images/test.jpg",
                thumbnailSource: "/api/thumbnail/f949384jc9384jc349f",
                content: "/api/content/f949384jc9384jc349f",
                permissions: {
                    read: true,
                    write: false,
                },
            },
        ],
    },
};

module.exports = {
    getFiles,
    getFilesImages,
};
