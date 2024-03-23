import { assert, describe, it } from 'vitest'
import render from '@riotjs/ssr'

import testButton from "./c-button.test.riot"

describe('c-button', (t) => {
    const html = render('test', testButton, {})
    const getResult = (test) => html.match(new RegExp(`<c-button[^><]*?${test}[^]*?\/c-button>`))[0].replace(/ test="[^"]*"/, '');

    it('default', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button><button></button></c-button>');
    })
    it('text', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button><button><span>Home</span></button></c-button>');
    })
    it('icon', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button icon="Home"><button><i>Home</i><span>Home</span></button></c-button>');
    })
    it('outlined', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button outlined="true"><button class="border"><span>Home</span></button></c-button>');
    })
    it('primary', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button primary="true"><button class="primary"></button></c-button>');
    })
    it('secondary', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button secondary="true"><button class="secondary"></button></c-button>');
    })
    it('tertiary', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button tertiary="true"><button class="tertiary"></button></c-button>');
    })
    it('smallround', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button smallround="true"><button class="small-round"></button></c-button>');
    })
    it('fill', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button fill="true"><button class="fill"></button></c-button>');
    })
    it('transparent', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button transparent="true"><button class="transparent"></button></c-button>');
    })
    it('small=', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button small="true"><button class="small"></button></c-button>');
    })
    it('medium', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button medium="true"><button class="medium"></button></c-button>');
    })
    it('large', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button large="true"><button class="large"></button></c-button>');
    })
    it('extra', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button extra="true"><button class="extra"></button></c-button>');
    })
    it('responsive', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button responsive="true"><button class="responsive"></button></c-button>');
    })
    it('circle', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button circle="true"><button class="circle"></button></c-button>');
    })
    it('square', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button square="true"><button class="square"></button></c-button>');
    })
    it('leftround', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button leftround="true"><button class="left-round"></button></c-button>');
    })
    it('rightround', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button rightround="true"><button class="right-round"></button></c-button>');
    })
    it('topround', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button topround="true"><button class="top-round"></button></c-button>');
    })
    it('bottomround', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button bottomround="true"><button class="bottom-round"></button></c-button>');
    })
    it('vertical', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button vertical="true"><button class="vertical"></button></c-button>');
    })
    it('extend', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button extend="true" circle="true"><button class="circle extend"><span>Home</span></button></c-button>');
    })
    it('smallelevate', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button smallelevate="true"><button class="small-elevate"></button></c-button>');
    })
    it('mediumelevate', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button mediumelevate="true"><button class="medium-elevate"></button></c-button>');
    })
    it('largeelevate', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button largeelevate="true"><button class="large-elevate"></button></c-button>');
    })
    it('img', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button img="./favicon.png"><button><img src="./favicon.png" class="responsive"></button></c-button>');
    })
    it('img-inline', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button img="./favicon.png" inline="true"><button><img src="./favicon.png"></button></c-button>');
    })
    it('custom-class', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button class="custom-class"><button class="custom-class"></button></c-button>');
    })
    it('class-mixed', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button class="custom-class" small="true" fill="true"><button class="fill small custom-class"></button></c-button>');
    })

    it('props-mixed', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button icon="edit" primary="true" outlined="true" smallelevate="true" large="true"><button class="primary large border small-elevate"><i>edit</i><span>Edit</span></button></c-button>');
    })


});