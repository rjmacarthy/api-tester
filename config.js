const payload = {
    "Person": {
        "Gender": {
            "Id": null,
            "Name": null,
            "SystemName": "Male"
        },
        "Title": "Mr",
        "FirstName": "Test",
        "LastName": "Test",
        "Addresses": [],
        "ContactItems": [],
        "PrimaryAddress": null
    },
    "RelationshipType": {}
};

const groupId = 536108;

const getgroup = 'https://core-api-systest.dezrez.com/api/group/536108';

const updategroup = 'https://core-api-systest.dezrez.com/api/group/536108/addgroupmember';

export {
    payload,
    token,
    updategroup,
    groupId,
    getgroup
};
