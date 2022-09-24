import { Selector , t } from 'testcafe';
fixture`My First Test`
    .page`https://devexpress.github.io/testcafe/example`;

test('This is my First Test' , async t => {
    // console.log("This is my First Tests with Test cafe !!")
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
})

test('Check count of the columns', async t => {
    const osCount = Selector('.column.col-2 label').count;
    await t.expect(osCount).eql(3);
});

test('Assertion with Selector', async t => {
    const developerNameInput = Selector('#developer-name');
    await t.typeText(developerNameInput, 'Peter');
    //the selector prefixed with the "await" operator doesn't update and produces unstable test results. Avoid it.
    const developerName = await Selector('#developer-name').value;
    await t
        .expect(developerName).eql('Peter')
});

test('Debugger', async t => {
    await t
        .debug()
        .setNativeDialogHandler(() => true)
        .click('#populate')
        .click('#submit-button');
});

test('My test', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#populate')
        .click('#submit-button');
});