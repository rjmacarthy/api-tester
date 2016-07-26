import request from 'superagent';
import * as config from './config';
import lodash from 'lodash';
import $ from 'jquery';

import {
    expect
} from 'chai';

let originalMemberLength;
let runTimes = 0;
let token;


const logger = (text) => {
    var div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}

const runTest = (times) => {
    logger('Getting original group...');
    request.get(config.getgroup)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', token)
        .end((err, {
            body
        }) => {
            if (!err) {
                originalMemberLength = body.Members.length;
                logger('DONE! Group member length = ' + body.Members.length);
                logger('Updating group with new member...')
                updateGroup(times);
            } else {
                logger(err);
            }
        });
}

const updateGroup = (times) => {
    request.put(config.updategroup)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', token)
        .send(config.payload)
        .end((err, {
            body
        }) => {
            logger('Group updated! Getting group again...')
            getGroupAgain(times);
        });
}

const getGroupAgain = (times) => {
    request.get(config.getgroup)
        .set('Content-Type', 'application/json')
        .set('Rezi-Api-Version', '1.0')
        .set('Authorization', token)
        .end((err, res) => {
            logger('Group member length = ' + res.body.Members.length)
            try {
                expect(res.body.Members.length).to.equal(originalMemberLength + 1);
                originalMemberLength = res.body.Members.length;
                logger('Test Passed!');
                logger('------------------------------');
                if (runTimes !== times - 1) {
                    runTest(times);
                    runTimes++
                }
                debugger;
            } catch (e) {
                logger(e, res.body, res.headers);
                return;
            }

        });
}

const addSearchingRole = () => {
    _.forEach(config.groupIds, (id) => {
        request.post(config.addSalesSearch(id))
            .set('Content-Type', 'application/json')
            .set('Rezi-Api-Version', '1.0')
            .set('Authorization', token)
            .send(config.groupSearchPayLoad)
            .end((err, {
                body
            }) => {
                logger('Group Role Added!')
            });
    })
}

$('#start').on('click', () => {
    logger('Running test ' + $('#times').val() + ' times');
    logger('------------------------------');
    token = $('#token').val();
    runTest($('#times').val());
});

$('#addSearchRoles').on('click', () => {
    token = $('#token').val();
    addSearchingRole();
});

