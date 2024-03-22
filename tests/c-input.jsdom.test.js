/**
 * @vitest-environment jsdom
 */

import { assert, describe, it, beforeEach, afterEach } from 'vitest'
import * as riot from 'riot'

import cInput from '../components/c-input.riot'

describe('Component c-input', () => {
    it('should render the input without props', () => {
        riot.register('c-input', cInput);
        const [component] = riot.mount(document.createElement('div'), {}, 'c-input')
        /**
         * From component.root.innerHTML
         * We get: <div class=" field border           "><input type="text"></div>
         */
        assert.strictEqual(component.root.querySelector('div').className.trim(), 'field border');
        assert.strictEqual(component.root.querySelector('input').type, 'text');
        assert.strictEqual(component.root.querySelector('input').value, '');
        riot.unregister('c-input');
    })

    it('should pass a default value to the input, and should update it', () => {
        riot.register('c-input', cInput);
        const [component] = riot.mount(document.createElement('div'), { value: "firstname" }, 'c-input')
        assert.strictEqual(component.root.querySelector('input').value, 'firstname');
        component.root.querySelector('input').value = "Jimmy"
        // Listen to On-change Event
        component.root.querySelector('input').addEventListener('change', (ev) => {
            console.log("VALUE CHANGED", ev.target.value);  
            assert.strictEqual(component.root.querySelector('input').value, 'Jimmy');
        })
        // Dispatch a change event
        component.root.querySelector('input').dispatchEvent(new Event('change'));
        setTimeout(() => {}, 2000)
        
        riot.unregister('c-input');
    })

    it('should render multiple props: label, type, error and round', () => {
        riot.register('c-input', cInput);
        const _props =  { value: "1234", label: "Password", type: "password", error: "The password is too show, minimum 20 characters." }
        const [component] = riot.mount(document.createElement('div'), _props, 'c-input')
        /**
         * component.root.innerHTML
         * <div class=" field border        invalid  label   "><input type="password"><label>Password</label><span class="error">The password is too show, minimum 20 characters.</span></div>
         */
        const divElement = component.root.querySelector('div')
        assert.strictEqual(divElement.className.replace(/\s+/g,' ').trim(), 'field border invalid label');

        const inputElement = component.root.querySelector('input')
        assert.strictEqual(inputElement.value, _props.value);
        assert.strictEqual(inputElement.type, _props.type);

        const labelElement = component.root.querySelector('label')
        assert.strictEqual(labelElement.textContent, _props.label);

        const spanElement = component.root.querySelector('span')
        assert.strictEqual(spanElement.textContent, _props.error);
        assert.strictEqual(spanElement.className, 'error');        
        riot.unregister('c-input');
    })
});
