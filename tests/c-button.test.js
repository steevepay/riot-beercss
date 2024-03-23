import { assert, describe, it } from 'vitest'
import render from '@riotjs/ssr'

import testButton from "./c-button.test.riot"

describe('c-button', () => {
    const html = render('test', testButton, {})
    const getResult = (test) => html.match(new RegExp(`<c-button test="${test}"[^].*?\/c-button>`))[0].replace(/ test="[^"]*"/, '');

    it('default', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button><button></button></c-button>');
    })
    it('text', (t) => {
        assert.strictEqual(getResult(t.task.name), '<c-button><button><span>Home</span></button></c-button>');
    })
    it('icon', () => {
        assert.strictEqual(getResult(3), '<c-button icon="Home"><button><i>Home</i><span>Home</span></button></c-button>');
    })
    it('outlined', () => {
        assert.strictEqual(getResult(4), '<c-button outlined="true"><button class="border"><span>Home</span></button></c-button>');
    })
    it('primary', () => {
        assert.strictEqual(getResult(5), '<c-button primary="true"><button class="primary"></button></c-button>');
    })
    it('secondary', () => {
        assert.strictEqual(getResult(6), '<c-button secondary="true"><button class="secondary"></button></c-button>');
    })
    it('tertiary', () => {
        assert.strictEqual(getResult(7), '<c-button tertiary="true"><button class="tertiary"></button></c-button>');
    })
    it('smallround', () => {
        assert.strictEqual(getResult(8), '<c-button smallround="true"><button class="small-round"></button></c-button>');
    })
    it('fill', () => {
        assert.strictEqual(getResult(9), '<c-button fill="true"><button class="fill"></button></c-button>');
    })
    it('transparent', () => {
        assert.strictEqual(getResult(10), '<c-button transparent="true"><button class="transparent"></button></c-button>');
    })
    it('small', () => {
        assert.strictEqual(getResult(11), '<c-button small="true"><button class="small"></button></c-button>');
    })
    it('medium', () => {
        assert.strictEqual(getResult(12), '<c-button medium="true"><button class="medium"></button></c-button>');
    })
    it('large', () => {
        assert.strictEqual(getResult(13), '<c-button large="true"><button class="large"></button></c-button>');
    })
    it('extra', () => {
        assert.strictEqual(getResult(14), '<c-button extra="true"><button class="extra"></button></c-button>');
    })
    it('responsive', () => {
        assert.strictEqual(getResult(15), '<c-button responsive="true"><button class="responsive"></button></c-button>');
    })
    it('circle', () => {
        assert.strictEqual(getResult(16), '<c-button circle="true"><button class="circle"></button></c-button>');
    })
    it('square', () => {
        assert.strictEqual(getResult(17), '<c-button square="true"><button class="square"></button></c-button>');
    })
    it('leftround', () => {
        assert.strictEqual(getResult(18), '<c-button leftround="true"><button class="left-round"></button></c-button>');
    })
    it('rightround', () => {
        assert.strictEqual(getResult(19), '<c-button rightround="true"><button class="right-round"></button></c-button>');
    })
    it('topround', () => {
        assert.strictEqual(getResult(20), '<c-button topround="true"><button class="top-round"></button></c-button>');
    })
    it('bottomround', () => {
        assert.strictEqual(getResult(21), '<c-button bottomround="true"><button class="bottom-round"></button></c-button>');
    })
    it('vertical', () => {  
        assert.strictEqual(getResult(22), '<c-button vertical="true"><button class="vertical"></button></c-button>');
    })
    it('extend + circle', () => {
        assert.strictEqual(getResult(23), '<c-button extend="true" circle="true"><button class="circle extend"><span>Home</span></button></c-button>');
    })
    it('smallelevate', () => {  
        assert.strictEqual(getResult(24), '<c-button smallelevate="true"><button class="small-elevate"></button></c-button>');
    })
    it('mediumelevate', () => {  
        assert.strictEqual(getResult(25), '<c-button mediumelevate="true"><button class="medium-elevate"></button></c-button>');
    })
    it('largeelevate', () => {  
        assert.strictEqual(getResult(26), '<c-button largeelevate="true"><button class="large-elevate"></button></c-button>');
    })
    it('img', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button img="./favicon.png"><button><img src="./favicon.png" class="responsive"></button></c-button>');
    })
    it('img-inline', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button img="./favicon.png" inline="true"><button><img src="./favicon.png"></button></c-button>');
    })
    it('class', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button class="custom-class"><button class="custom-class"></button></c-button>');
    })
    it('class-mixed', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button class="custom-class" small="true" fill="true"><button class="fill small custom-class"></button></c-button>');
    })

    it('mixed', (t) => {  
        assert.strictEqual(getResult(t.task.name), '<c-button icon="edit" primary="true" outlined="true" smallelevate="true" large="true"><button class="primary large border small-elevate"><i>edit</i><span>Edit</span></button></c-button>');
    })


});