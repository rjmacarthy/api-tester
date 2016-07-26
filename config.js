const groupIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101, 201, 301, 302, 401, 501, 601, 701, 702, 801, 901, 902, 903, 904, 1001, 1101, 1102, 1103, 1104, 1201, 1301, 1401, 1402, 1403, 1404, 1405, 1501, 1601, 1701, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1901, 2001, 2101];

const groupSearchPayLoad = {
    "OwningTeamId": 3,
    "Criteria": {
        "BudgetFrom": "100",
        "BudgetTo": "100",
        "MustHave":
        {
            "PropertyTypes": [],
            "PropertyTags": [],
            "Regions": []
        },
        "ShouldNotHave": {
            "PropertyTypes": [],
            "PropertyTags": []
        },
        "MustNotHave": { "Regions": [] }
    },
    "Grade": {},
    "Origin": {},
    "FinancialStatus": {}
}

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

const addSalesSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/savesalessearch`
}

export {
payload,
token,
updategroup,
groupId,
getgroup,
groupIds,
addSalesSearch,
groupSearchPayLoad
};
