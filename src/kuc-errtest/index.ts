import { LitElement, html, customElement, property } from "lit-element";

type TestProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit" | "alert" | "save";
  disabled?: boolean;
  visible?: boolean;
  onClick?: (params?: MouseEvent) => void;
};

@customElement("kuc-Test")
export default class Test extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) type = "normal";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) visible = true;

  private test?: (params?: MouseEvent) => void;

  private _onClick?: (params?: MouseEvent) => void;

  constructor(props?: TestProps) {
    super();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.id = props.id !== undefined ? props.id : this.id;
    this.text = props.text !== undefined ? props.text : this.text;
    this.type = props.type !== undefined ? props.type : this.type;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
    this._onClick = props.onClick;
  }

  set onClick(callback: ((params?: MouseEvent) => void) | undefined) {
    this._onClick = callback;
    this.requestUpdate();
  }

  get onClick(): ((params?: MouseEvent) => void) | undefined {
    return this._onClick;
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _handleClickTest(event: MouseEvent) {
    typeof this._onClick === "function" && this._onClick(event);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <Test
        type="Test"
        class="kuc-Test__Test kuc-Test__Test--${this.type}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickTest}"
      >
        ${this.text}
      </Test>
    `;
  }
  private _getStyleTagTemplate() {
    return html`
    `;
  }
}
