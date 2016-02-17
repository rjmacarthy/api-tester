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

const groupId = 428913;

const getgroup = 'https://core-api-systest.dezrez.com/api/group/428913';

const updategroup = 'https://core-api-systest.dezrez.com/api/group/428913/addgroupmember';

export {
    payload,
    token,
    updategroup,
    groupId,
    getgroup
};
