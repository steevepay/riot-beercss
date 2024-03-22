/**
 * @vitest-environment node
 */

import { assert, describe, it } from 'vitest'
import render from '@riotjs/ssr'

import cInput from '../components/c-input.riot'

/** TODO: 
 * - [ ] Test all input props
 */

describe('Component c-input', () => {
    it('should render the input without props', () => {
        const html = render('c-input', cInput, {})
    
        assert.strictEqual(html, '<c-input><div class="field border"><input value="" type="text"></div></c-input>')
    })

    it('should render the input with a default value', () => {
        const _htmlExpected = '<c-input><div class="field border"><input value="Firstname" type="text"></div></c-input>';
        const _html = render('c-input', cInput, { value: "Firstname"})
    
        assert.strictEqual(_html, _htmlExpected)
    })

    it('should render multiple props: label, type, error and round', () => {
        const _htmlExpected = '<c-input><div class="field border round invalid label"><input value="" type="password"><label>Password</label><span class="error">The password is too show, minimum 20 characters.</span></div></c-input>';
        const _html = render('c-input', cInput, { label: "Password", type: "password", error: "The password is too show, minimum 20 characters.", round: true})
    
        assert.strictEqual(_html, _htmlExpected)
    })
});
