import { Selector , t } from 'testcafe';
fixture`My First Test with config`
    .page;

test('This is my First Test with config' , async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
})

