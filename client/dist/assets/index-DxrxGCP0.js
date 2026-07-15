(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();class Vt{constructor(e="/api"){this.baseUrl=e}async request(e,o={}){try{const s=await fetch(`${this.baseUrl}${e}`,{credentials:"include",headers:{"Content-Type":"application/json",...o.headers},...o}),n=await s.json();if(!s.ok)throw new Error(n.message||"The request failed.");return n}catch(s){throw s instanceof TypeError?new Error("The server could not be reached."):s}}get(e){return this.request(e)}post(e,o={}){return this.request(e,{method:"POST",body:JSON.stringify(o)})}put(e,o={}){return this.request(e,{method:"PUT",body:JSON.stringify(o)})}patch(e,o={}){return this.request(e,{method:"PATCH",body:JSON.stringify(o)})}delete(e){return this.request(e,{method:"DELETE"})}}class _t{constructor(e){this.root=e}render({initialTab:e="login",clans:o=[]}={}){this.root.innerHTML=`
      <section class="auth-page">
        <div class="auth-card">
          <aside class="auth-brand">
            <div>
              <p class="eyebrow">PROJECT INTEGRATOR</p>
              <h1>MENTOR</h1>
              <p>
                A simple platform where Coders request academic support and
                Mentors organize each session.
              </p>
            </div>

            <div class="brand-benefits">
              <article>
                <span>01</span>
                <div>
                  <strong>Request support</strong>
                  <p>Describe the topic and the problem you need to solve.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <strong>Organize the session</strong>
                  <p>The Mentor assigns a date and records observations.</p>
                </div>
              </article>
            </div>
          </aside>

          <div class="auth-panel">
            <div class="tab-list" role="tablist">
              <button
                id="login-tab"
                class="tab-button ${e==="login"?"active":""}"
                type="button"
              >
                Login
              </button>
              <button
                id="register-tab"
                class="tab-button ${e==="register"?"active":""}"
                type="button"
              >
                Register
              </button>
            </div>

            <div id="auth-message" class="message hidden" aria-live="polite"></div>

            <section id="login-section" class="auth-section ${e!=="login"?"hidden":""}">
              <h2>Welcome back</h2>
              <p class="section-description">Enter your account to continue.</p>

              <form id="login-form" class="form-stack">
                <label class="form-group">
                  <span>Email</span>
                  <input
                    id="login-email"
                    class="form-input"
                    type="email"
                    autocomplete="email"
                    required
                  />
                </label>

                <label class="form-group">
                  <span>Password</span>
                  <input
                    id="login-password"
                    class="form-input"
                    type="password"
                    autocomplete="current-password"
                    required
                  />
                </label>

                <button id="login-button" class="primary-button" type="submit">
                  Sign in
                </button>
              </form>

              <div class="demo-box">
                <strong>Demo accounts</strong>
                <p>Coder: coder@mentor.test / 123456</p>
                <p>Mentor: mentor@mentor.test / 123456</p>
              </div>
            </section>

            <section id="register-section" class="auth-section ${e!=="register"?"hidden":""}">
              <h2>Create account</h2>
              <p class="section-description">
                Select the role that represents your work in the platform.
              </p>

              <form id="register-form" class="form-stack">
                <div class="role-selector">
                  <label class="role-option">
                    <input type="radio" name="role" value="CODER" checked />
                    <span>Coder</span>
                    <small>Requests mentorships</small>
                  </label>
                  <label class="role-option">
                    <input type="radio" name="role" value="MENTOR" />
                    <span>Mentor</span>
                    <small>Manages requests</small>
                  </label>
                </div>

                <div class="form-grid">
                  <label class="form-group">
                    <span>First name</span>
                    <input id="register-first-name" class="form-input" required />
                  </label>

                  <label class="form-group">
                    <span>Last name</span>
                    <input id="register-last-name" class="form-input" required />
                  </label>
                </div>

                <label class="form-group">
                  <span>Email</span>
                  <input
                    id="register-email"
                    class="form-input"
                    type="email"
                    autocomplete="email"
                    required
                  />
                </label>

                <label id="clan-group" class="form-group">
                  <span>Clan</span>
                  <select id="register-clan" class="form-input">
                    <option value="">Select a clan</option>
                    ${o.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
                  </select>
                </label>

                <div class="form-grid">
                  <label class="form-group">
                    <span>Password</span>
                    <input
                      id="register-password"
                      class="form-input"
                      type="password"
                      autocomplete="new-password"
                      minlength="6"
                      required
                    />
                  </label>

                  <label class="form-group">
                    <span>Confirm password</span>
                    <input
                      id="register-confirm-password"
                      class="form-input"
                      type="password"
                      autocomplete="new-password"
                      minlength="6"
                      required
                    />
                  </label>
                </div>

                <button id="register-button" class="primary-button" type="submit">
                  Create account
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    `}bindEvents({onLogin:e,onRegister:o}){const s=this.root.querySelector("#login-tab"),n=this.root.querySelector("#register-tab"),r=this.root.querySelector("#login-section"),a=this.root.querySelector("#register-section"),l=this.root.querySelector("#clan-group"),d=this.root.querySelector("#register-clan"),$=k=>{const D=k==="login";r.classList.toggle("hidden",!D),a.classList.toggle("hidden",D),s.classList.toggle("active",D),n.classList.toggle("active",!D),this.clearMessage()};s.addEventListener("click",()=>$("login")),n.addEventListener("click",()=>$("register")),this.root.querySelectorAll('input[name="role"]').forEach(k=>{k.addEventListener("change",()=>{const D=k.value==="CODER"&&k.checked;l.classList.toggle("hidden",!D),d.required=D})}),this.root.querySelector("#login-form").addEventListener("submit",k=>{k.preventDefault(),e(this.getLoginData())}),this.root.querySelector("#register-form").addEventListener("submit",k=>{k.preventDefault(),o(this.getRegisterData())})}getLoginData(){return{email:this.root.querySelector("#login-email").value,password:this.root.querySelector("#login-password").value}}getRegisterData(){const e=this.root.querySelector('input[name="role"]:checked').value;return{firstName:this.root.querySelector("#register-first-name").value,lastName:this.root.querySelector("#register-last-name").value,email:this.root.querySelector("#register-email").value,password:this.root.querySelector("#register-password").value,confirmPassword:this.root.querySelector("#register-confirm-password").value,role:e,clanId:e==="CODER"?Number(this.root.querySelector("#register-clan").value):null}}setLoading(e,o){const s=this.root.querySelector(`#${e}`);s&&(s.disabled=o,s.textContent=o?"Processing...":s.dataset.originalText)}prepareButtons(){["login-button","register-button"].forEach(e=>{const o=this.root.querySelector(`#${e}`);o.dataset.originalText=o.textContent.trim()})}showMessage(e,o="error"){const s=this.root.querySelector("#auth-message");s.textContent=e,s.className=`message message-${o}`}clearMessage(){const e=this.root.querySelector("#auth-message");e.textContent="",e.className="message hidden"}}/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/function Ke(t,e,o){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:o;throw new TypeError("Private element is not present on this object")}function Gt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ie(t,e){return t.get(Ke(t,e))}function Wt(t,e,o){Gt(t,e),e.set(t,o)}function Ut(t,e,o){return t.set(Ke(t,e),o),o}const Yt=100,c={},Kt=()=>{c.previousActiveElement instanceof HTMLElement?(c.previousActiveElement.focus(),c.previousActiveElement=null):document.body&&document.body.focus()},Xt=t=>new Promise(e=>{if(!t)return e();const o=window.scrollX,s=window.scrollY;c.restoreFocusTimeout=setTimeout(()=>{Kt(),e()},Yt),window.scrollTo(o,s)}),Xe="swal2-",Zt=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],i=Zt.reduce((t,e)=>(t[e]=Xe+e,t),{}),Jt=["success","warning","info","question","error"],te=Jt.reduce((t,e)=>(t[e]=Xe+e,t),{}),Ze="SweetAlert2:",ye=t=>t.charAt(0).toUpperCase()+t.slice(1),b=t=>{console.warn(`${Ze} ${typeof t=="object"?t.join(" "):t}`)},R=t=>{console.error(`${Ze} ${t}`)},He=[],Qt=t=>{He.includes(t)||(He.push(t),b(t))},Je=(t,e=null)=>{Qt(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},ce=t=>typeof t=="function"?t():t,ke=t=>t&&typeof t.toPromise=="function",Y=t=>ke(t)?t.toPromise():Promise.resolve(t),xe=t=>t&&Promise.resolve(t)===t,eo=()=>navigator.userAgent.includes("Firefox"),v=()=>document.body.querySelector(`.${i.container}`),K=t=>{const e=v();return e?e.querySelector(t):null},C=t=>K(`.${t}`),w=()=>C(i.popup),_=()=>C(i.icon),to=()=>C(i["icon-content"]),Qe=()=>C(i.title),Ce=()=>C(i["html-container"]),et=()=>C(i.image),Ee=()=>C(i["progress-steps"]),de=()=>C(i["validation-message"]),L=()=>K(`.${i.actions} .${i.confirm}`),G=()=>K(`.${i.actions} .${i.cancel}`),N=()=>K(`.${i.actions} .${i.deny}`),oo=()=>C(i["input-label"]),W=()=>K(`.${i.loader}`),X=()=>C(i.actions),tt=()=>C(i.footer),ue=()=>C(i["timer-progress-bar"]),$e=()=>C(i.close),so=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ae=()=>{const t=w();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(e).sort((r,a)=>{const l=parseInt(r.getAttribute("tabindex")||"0"),d=parseInt(a.getAttribute("tabindex")||"0");return l>d?1:l<d?-1:0}),s=t.querySelectorAll(so),n=Array.from(s).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(n))].filter(r=>y(r))},Se=()=>P(document.body,i.shown)&&!P(document.body,i["toast-shown"])&&!P(document.body,i["no-backdrop"]),we=()=>{const t=w();return t?P(t,i.toast):!1},no=()=>{const t=w();return t?t.hasAttribute("data-loading"):!1},E=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html"),n=s.querySelector("head");n&&Array.from(n.childNodes).forEach(a=>{t.appendChild(a)});const r=s.querySelector("body");r&&Array.from(r.childNodes).forEach(a=>{a instanceof HTMLVideoElement||a instanceof HTMLAudioElement?t.appendChild(a.cloneNode(!0)):t.appendChild(a)})}},P=(t,e)=>e?e.split(/\s+/).every(o=>t.classList.contains(o)):!1,ro=(t,e)=>{Array.from(t.classList).forEach(o=>{!Object.values(i).includes(o)&&!Object.values(te).includes(o)&&!Object.values(e.showClass||{}).includes(o)&&t.classList.remove(o)})},x=(t,e,o)=>{if(ro(t,e),!e.customClass)return;const s=e.customClass[o];if(s){if(typeof s!="string"&&!s.forEach){b(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof s}"`);return}u(t,s)}},he=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${i.popup} > .${i[e]}`);case"checkbox":return t.querySelector(`.${i.popup} > .${i.checkbox} input`);case"radio":return t.querySelector(`.${i.popup} > .${i.radio} input:checked`)||t.querySelector(`.${i.popup} > .${i.radio} input:first-child`);case"range":return t.querySelector(`.${i.popup} > .${i.range} input`);default:return t.querySelector(`.${i.popup} > .${i.input}`)}},ot=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},st=(t,e,o)=>{if(!t||!e)return;const s=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(t)?t:[t]).forEach(r=>{s.forEach(a=>{o?r.classList.add(a):r.classList.remove(a)})})},u=(t,e)=>{st(t,e,!0)},A=(t,e)=>{st(t,e,!1)},B=(t,e)=>Array.from(t.children).find(o=>o instanceof HTMLElement&&P(o,e)),I=(t,e,o)=>{o===`${parseInt(`${o}`)}`&&(o=parseInt(o)),o||o===0?t.style.setProperty(e,typeof o=="number"?`${o}px`:o):t.style.removeProperty(e)},f=(t,e="flex")=>{t&&(t.style.display=e)},g=t=>{t&&(t.style.display="none")},Te=(t,e="block")=>{t&&new MutationObserver(()=>{Z(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Re=(t,e,o,s)=>{const n=t.querySelector(e);n&&n.style.setProperty(o,s)},Z=(t,e,o="flex")=>{e?f(t,o):g(t)},y=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),io=()=>!y(L())&&!y(N())&&!y(G()),fe=t=>t.scrollHeight>t.clientHeight,ao=(t,e)=>{let o=t;for(;o&&o!==e;){if(fe(o))return!0;o=o.parentElement}return!1},nt=t=>{const e=window.getComputedStyle(t),o=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return o>0||s>0},Le=(t,e=!1)=>{const o=ue();o&&y(o)&&(e&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${t/1e3}s linear`,o.style.width="0%"},10))},lo=()=>{const t=ue();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const o=parseInt(window.getComputedStyle(t).width),s=e/o*100;t.style.width=`${s}%`},co=()=>typeof window>"u"||typeof document>"u",uo=`
 <div aria-labelledby="${i.title}" aria-describedby="${i["html-container"]}" class="${i.popup}" tabindex="-1">
   <button type="button" class="${i.close}"></button>
   <ul class="${i["progress-steps"]}"></ul>
   <div class="${i.icon}"></div>
   <img class="${i.image}" />
   <h2 class="${i.title}" id="${i.title}"></h2>
   <div class="${i["html-container"]}" id="${i["html-container"]}"></div>
   <input class="${i.input}" id="${i.input}" />
   <input type="file" class="${i.file}" />
   <div class="${i.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${i.select}" id="${i.select}"></select>
   <div class="${i.radio}"></div>
   <label class="${i.checkbox}">
     <input type="checkbox" id="${i.checkbox}" />
     <span class="${i.label}"></span>
   </label>
   <textarea class="${i.textarea}" id="${i.textarea}"></textarea>
   <div class="${i["validation-message"]}" id="${i["validation-message"]}"></div>
   <div class="${i.actions}">
     <div class="${i.loader}"></div>
     <button type="button" class="${i.confirm}"></button>
     <button type="button" class="${i.deny}"></button>
     <button type="button" class="${i.cancel}"></button>
   </div>
   <div class="${i.footer}"></div>
   <div class="${i["timer-progress-bar-container"]}">
     <div class="${i["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),wo=()=>{const t=v();return t?(t.remove(),A([document.documentElement,document.body],[i["no-backdrop"],i["toast-shown"],i["has-column"]]),!0):!1},O=()=>{c.currentInstance&&c.currentInstance.resetValidationMessage()},ho=()=>{const t=w();if(!t)return;const e=B(t,i.input),o=B(t,i.file),s=t.querySelector(`.${i.range} input`),n=t.querySelector(`.${i.range} output`),r=B(t,i.select),a=t.querySelector(`.${i.checkbox} input`),l=B(t,i.textarea);e&&(e.oninput=O),o&&(o.onchange=O),r&&(r.onchange=O),a&&(a.onchange=O),l&&(l.oninput=O),s&&n&&(s.oninput=()=>{O(),n.value=s.value},s.onchange=()=>{O(),n.value=s.value})},po=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},mo=t=>{const e=w();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},fo=t=>{window.getComputedStyle(t).direction==="rtl"&&(u(v(),i.rtl),c.isRTL=!0)},go=t=>{const e=wo();if(co()){R("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=i.container,e&&u(o,i["no-transition"]),E(o,uo),o.dataset.swal2Theme=t.theme;const s=po(t.target||"body");s.appendChild(o),t.topLayer&&(o.setAttribute("popover",""),o.showPopover()),mo(t),fo(s),ho()},Pe=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?bo(t,e):t&&E(e,t)},bo=(t,e)=>{"jquery"in t?vo(e,t):E(e,t.toString())},vo=(t,e)=>{if(t.textContent="",0 in e)for(let o=0;o in e;o++)t.appendChild(e[o].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},yo=(t,e)=>{const o=X(),s=W();!o||!s||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?g(o):f(o),x(o,e,"actions"),ko(o,s,e),E(s,e.loaderHtml||""),x(s,e,"loader"))};function ko(t,e,o){const s=L(),n=N(),r=G();!s||!n||!r||(pe(s,"confirm",o),pe(n,"deny",o),pe(r,"cancel",o),xo(s,n,r,o),o.reverseButtons&&(o.toast?(t.insertBefore(r,s),t.insertBefore(n,s)):(t.insertBefore(r,e),t.insertBefore(n,e),t.insertBefore(s,e))))}function xo(t,e,o,s){if(!s.buttonsStyling){A([t,e,o],i.styled);return}u([t,e,o],i.styled),[[t,"confirm",s.confirmButtonColor],[e,"deny",s.denyButtonColor],[o,"cancel",s.cancelButtonColor]].forEach(([r,a,l])=>{l&&r.style.setProperty(`--swal2-${a}-button-background-color`,l),Co(r)})}function Co(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function pe(t,e,o){const s=ye(e);Z(t,o[`show${s}Button`],"inline-block"),E(t,o[`${e}ButtonText`]||""),t.setAttribute("aria-label",o[`${e}ButtonAriaLabel`]||""),t.className=i[e],x(t,o,`${e}Button`)}const Eo=(t,e)=>{const o=$e();o&&(E(o,e.closeButtonHtml||""),x(o,e,"closeButton"),Z(o,e.showCloseButton),o.setAttribute("aria-label",e.closeButtonAriaLabel||""))},$o=(t,e)=>{const o=v();o&&(Ao(o,e.backdrop),So(o,e.position),To(o,e.grow),x(o,e,"container"))};function Ao(t,e){typeof e=="string"?t.style.background=e:e||u([document.documentElement,document.body],i["no-backdrop"])}function So(t,e){e&&(e in i?u(t,i[e]):(b('The "position" parameter is not valid, defaulting to "center"'),u(t,i.center)))}function To(t,e){e&&u(t,i[`grow-${e}`])}var h={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const Lo=["input","file","range","select","radio","checkbox","textarea"],Po=(t,e)=>{const o=w();if(!o)return;const s=h.innerParams.get(t),n=!s||e.input!==s.input;Lo.forEach(r=>{const a=B(o,i[r]);a&&(Mo(r,e.inputAttributes),a.className=i[r],n&&g(a))}),e.input&&(n&&Bo(e),Do(e))},Bo=t=>{if(!t.input)return;if(!p[t.input]){R(`Unexpected type of input! Expected ${Object.keys(p).join(" | ")}, got "${t.input}"`);return}const e=rt(t.input);if(!e)return;const o=p[t.input](e,t);f(e),t.inputAutoFocus&&setTimeout(()=>{ot(o)})},qo=t=>{for(const{name:e}of Array.from(t.attributes))["id","type","value","style"].includes(e)||t.removeAttribute(e)},Mo=(t,e)=>{const o=w();if(!o)return;const s=he(o,t);if(s){qo(s);for(const n in e)s.setAttribute(n,e[n])}},Do=t=>{if(!t.input)return;const e=rt(t.input);e&&x(e,t,"input")},Be=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},J=(t,e,o)=>{if(o.inputLabel){const s=document.createElement("label"),n=i["input-label"];s.setAttribute("for",t.id),s.className=n,typeof o.customClass=="object"&&u(s,o.customClass.inputLabel),s.innerText=o.inputLabel,e.insertAdjacentElement("beforebegin",s)}},rt=t=>{const e=w();if(e)return B(e,i[t]||i.input)},oe=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:xe(e)||b(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},p={};p.text=p.email=p.password=p.number=p.tel=p.url=p.search=p.date=p["datetime-local"]=p.time=p.week=p.month=(t,e)=>{const o=t;return oe(o,e.inputValue),J(o,o,e),Be(o,e),o.type=e.input,o};p.file=(t,e)=>{const o=t;return J(o,o,e),Be(o,e),o};p.range=(t,e)=>{const o=t,s=o.querySelector("input"),n=o.querySelector("output");return s&&(oe(s,e.inputValue),s.type=e.input,J(s,t,e)),n&&oe(n,e.inputValue),t};p.select=(t,e)=>{const o=t;if(o.textContent="",e.inputPlaceholder){const s=document.createElement("option");E(s,e.inputPlaceholder),s.value="",s.disabled=!0,s.selected=!0,o.appendChild(s)}return J(o,o,e),o};p.radio=t=>{const e=t;return e.textContent="",t};p.checkbox=(t,e)=>{const o=w();if(!o)throw new Error("Popup not found");const s=he(o,"checkbox");if(!s)throw new Error("Checkbox input not found");s.value="1",s.checked=!!e.inputValue;const r=t.querySelector("span");if(r){const a=e.inputPlaceholder||e.inputLabel;a&&E(r,a)}return s};p.textarea=(t,e)=>{const o=t;oe(o,e.inputValue),Be(o,e),J(o,o,e);const s=n=>parseInt(window.getComputedStyle(n).marginLeft)+parseInt(window.getComputedStyle(n).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const n=w();if(!n)return;const r=parseInt(window.getComputedStyle(n).width),a=()=>{if(!document.body.contains(o))return;const l=o.offsetWidth+s(o),d=w();d&&(l>r?d.style.width=`${l}px`:I(d,"width",e.width))};new MutationObserver(a).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const Oo=(t,e)=>{const o=Ce();o&&(Te(o),x(o,e,"htmlContainer"),e.html?(Pe(e.html,o),f(o,"block")):e.text?(o.textContent=e.text,f(o,"block")):g(o),Po(t,e))},Io=(t,e)=>{const o=tt();o&&(Te(o),Z(o,!!e.footer,"block"),e.footer&&Pe(e.footer,o),x(o,e,"footer"))},Ho=(t,e)=>{const o=h.innerParams.get(t),s=_();if(!s)return;if(o&&e.icon===o.icon){je(s,e),Ne(s,e);return}if(!e.icon&&!e.iconHtml){g(s);return}if(e.icon&&Object.keys(te).indexOf(e.icon)===-1){R(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),g(s);return}f(s),je(s,e),Ne(s,e),u(s,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",it)},Ne=(t,e)=>{for(const[o,s]of Object.entries(te))e.icon!==o&&A(t,s);u(t,e.icon&&te[e.icon]),jo(t,e),it(),x(t,e,"icon")},it=()=>{const t=w();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color");t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(s=>{s.style.backgroundColor=e})},Ro=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,No=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,je=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let o=t.innerHTML,s="";e.iconHtml?s=ze(e.iconHtml):e.icon==="success"?(s=Ro(e),o=o.replace(/ style=".*?"/g,"")):e.icon==="error"?s=No:e.icon&&(s=ze({question:"?",warning:"!",info:"i"}[e.icon])),o.trim()!==s.trim()&&E(t,s)},jo=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Re(t,o,"background-color",e.iconColor);Re(t,".swal2-success-ring","border-color",e.iconColor)}},ze=t=>`<div class="${i["icon-content"]}">${t}</div>`,zo=(t,e)=>{const o=et();if(o){if(!e.imageUrl){g(o);return}f(o,""),o.setAttribute("src",e.imageUrl),o.setAttribute("alt",e.imageAlt||""),I(o,"width",e.imageWidth),I(o,"height",e.imageHeight),o.className=i.image,x(o,e,"image")}};let qe=!1,at=0,lt=0,ct=0,dt=0;const Fo=t=>{t.addEventListener("mousedown",se),document.body.addEventListener("mousemove",ne),t.addEventListener("mouseup",re),t.addEventListener("touchstart",se),document.body.addEventListener("touchmove",ne),t.addEventListener("touchend",re)},Vo=t=>{t.removeEventListener("mousedown",se),document.body.removeEventListener("mousemove",ne),t.removeEventListener("mouseup",re),t.removeEventListener("touchstart",se),document.body.removeEventListener("touchmove",ne),t.removeEventListener("touchend",re)},se=t=>{const e=w();if(!e)return;const o=_();if(t.target===e||o&&o.contains(t.target)){qe=!0;const s=ut(t);at=s.clientX,lt=s.clientY,ct=parseInt(e.style.insetInlineStart)||0,dt=parseInt(e.style.insetBlockStart)||0,u(e,"swal2-dragging")}},ne=t=>{const e=w();if(e&&qe){let{clientX:o,clientY:s}=ut(t);const n=o-at;e.style.insetInlineStart=`${ct+(c.isRTL?-n:n)}px`,e.style.insetBlockStart=`${dt+(s-lt)}px`}},re=()=>{const t=w();qe=!1,A(t,"swal2-dragging")},ut=t=>{const e=t.type.startsWith("touch")?t.touches[0]:t;return{clientX:e.clientX,clientY:e.clientY}},_o=(t,e)=>{const o=v(),s=w();if(!(!o||!s)){if(e.toast){I(o,"width",e.width),s.style.width="100%";const n=W();n&&s.insertBefore(n,_())}else I(s,"width",e.width);I(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),g(de()),Go(s,e),e.draggable&&!e.toast?(u(s,i.draggable),Fo(s)):(A(s,i.draggable),Vo(s))}},Go=(t,e)=>{const o=e.showClass||{};t.className=`${i.popup} ${y(t)?o.popup:""}`,e.toast?(u([document.documentElement,document.body],i["toast-shown"]),u(t,i.toast)):u(t,i.modal),x(t,e,"popup"),typeof e.customClass=="string"&&u(t,e.customClass),e.icon&&u(t,i[`icon-${e.icon}`])},Wo=(t,e)=>{const o=Ee();if(!o)return;const{progressSteps:s,currentProgressStep:n}=e;if(!s||s.length===0||n===void 0){g(o);return}f(o),o.textContent="",n>=s.length&&b("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((r,a)=>{const l=Uo(r);if(o.appendChild(l),a===n&&u(l,i["active-progress-step"]),a!==s.length-1){const d=Yo(e);o.appendChild(d)}})},Uo=t=>{const e=document.createElement("li");return u(e,i["progress-step"]),E(e,t),e},Yo=t=>{const e=document.createElement("li");return u(e,i["progress-step-line"]),t.progressStepsDistance&&I(e,"width",t.progressStepsDistance),e},Ko=(t,e)=>{const o=Qe();o&&(Te(o),Z(o,!!(e.title||e.titleText),"block"),e.title&&Pe(e.title,o),e.titleText&&(o.innerText=e.titleText),x(o,e,"title"))},wt=(t,e)=>{var o;_o(t,e),$o(t,e),Wo(t,e),Ho(t,e),zo(t,e),Ko(t,e),Eo(t,e),Oo(t,e),yo(t,e),Io(t,e);const s=w();typeof e.didRender=="function"&&s&&e.didRender(s),(o=c.eventEmitter)===null||o===void 0||o.emit("didRender",s)},Xo=()=>y(w()),ht=()=>{var t;return(t=L())===null||t===void 0?void 0:t.click()},Zo=()=>{var t;return(t=N())===null||t===void 0?void 0:t.click()},Jo=()=>{var t;return(t=G())===null||t===void 0?void 0:t.click()},U=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),pt=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},Qo=(t,e,o)=>{if(pt(t),!e.toast){const s=r=>ts(e,r,o);t.keydownHandler=s;const n=e.keydownListenerCapture?window:w();if(n){t.keydownTarget=n,t.keydownListenerCapture=e.keydownListenerCapture;const r=s;t.keydownTarget.addEventListener("keydown",r,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},ge=(t,e)=>{var o;const s=Ae();return s.length?(t=t+e,t===-2&&(t=s.length-1),t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus(),!(eo()&&s[t]instanceof HTMLIFrameElement)):((o=w())===null||o===void 0||o.focus(),!0)},mt=["ArrowRight","ArrowDown"],es=["ArrowLeft","ArrowUp"],ts=(t,e,o)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?os(e,t):e.key==="Tab"?ss(e):[...mt,...es].includes(e.key)?ns(e.key):e.key==="Escape"&&rs(e,t,o)))},os=(t,e)=>{if(!ce(e.allowEnterKey))return;const o=w();if(!o||!e.input)return;const s=he(o,e.input);if(t.target&&s&&t.target instanceof HTMLElement&&t.target.outerHTML===s.outerHTML){if(["textarea","file"].includes(e.input))return;ht(),t.preventDefault()}},ss=t=>{const e=t.target,s=Ae().findIndex(r=>r===e);let n=!0;t.shiftKey?n=ge(s,-1):n=ge(s,1),t.stopPropagation(),n&&t.preventDefault()},ns=t=>{const e=X(),o=L(),s=N(),n=G();if(!e||!o||!s||!n)return;const r=[o,s,n];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const a=mt.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let d=0;d<e.children.length;d++){if(l=l[a],!l)return;if(l instanceof HTMLButtonElement&&y(l))break}l instanceof HTMLButtonElement&&l.focus()}},rs=(t,e,o)=>{t.preventDefault(),ce(e.allowEscapeKey)&&o(U.esc)};var z={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const is=()=>{const t=v();Array.from(document.body.children).forEach(o=>{o.contains(t)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},ft=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Me=typeof window<"u"&&!!window.GestureEvent,as=Me&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,ls=()=>{if(Me&&!P(document.body,i.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,u(document.body,i.iosfix),cs()}},cs=()=>{const t=v();if(!t)return;let e;t.ontouchstart=o=>{e=ds(o)},t.ontouchmove=o=>{e&&(o.preventDefault(),o.stopPropagation())}},ds=t=>{const e=t.target,o=v(),s=Ce();return!o||!s||us(t)||ws(t)?!1:e===o||!fe(o)&&e instanceof HTMLElement&&!ao(e,s)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(fe(s)&&s.contains(e))},us=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),ws=t=>t.touches&&t.touches.length>1,hs=()=>{if(P(document.body,i.iosfix)){const t=parseInt(document.body.style.top,10);A(document.body,i.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},ps=()=>{const t=document.createElement("div");t.className=i["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let j=null;const ms=t=>{j===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(j=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${j+ps()}px`)},fs=()=>{j!==null&&(document.body.style.paddingRight=`${j}px`,j=null)};function gt(t,e,o,s){we()?Fe(t,s):(Xt(o).then(()=>Fe(t,s)),pt(c)),Me?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Se()&&(fs(),hs(),ft()),gs()}function gs(){A([document.documentElement,document.body],[i.shown,i["height-auto"],i["no-backdrop"],i["toast-shown"]])}function q(t){t=vs(t);const e=z.swalPromiseResolve.get(this),o=bs(this);this.isAwaitingPromise?t.isDismissed||(Q(this),e(t)):o&&e(t)}const bs=t=>{const e=w();if(!e)return!1;const o=h.innerParams.get(t);if(!o||P(e,o.hideClass.popup))return!1;A(e,o.showClass.popup),u(e,o.hideClass.popup);const s=v();return A(s,o.showClass.backdrop),u(s,o.hideClass.backdrop),ys(t,e,o),!0};function bt(t){const e=z.swalPromiseReject.get(this);Q(this),e&&e(t)}const Q=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,h.innerParams.get(t)||t._destroy())},vs=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),ys=(t,e,o)=>{var s;const n=v(),r=nt(e);typeof o.willClose=="function"&&o.willClose(e),(s=c.eventEmitter)===null||s===void 0||s.emit("willClose",e),r&&n?ks(t,e,n,!!o.returnFocus,o.didClose):n&&gt(t,n,!!o.returnFocus,o.didClose)},ks=(t,e,o,s,n)=>{c.swalCloseEventFinishedCallback=gt.bind(null,t,o,s,n);const r=function(a){if(a.target===e){var l;(l=c.swalCloseEventFinishedCallback)===null||l===void 0||l.call(c),delete c.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Fe=(t,e)=>{setTimeout(()=>{var o;typeof e=="function"&&e.bind(t.params)(),(o=c.eventEmitter)===null||o===void 0||o.emit("didClose"),t._destroy&&t._destroy()})},F=t=>{let e=w();if(e||new V,e=w(),!e)return;const o=W();we()?g(_()):xs(e,t),f(o),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},xs=(t,e)=>{const o=X(),s=W();!o||!s||(!e&&y(L())&&(e=L()),f(o),e&&(g(e),s.setAttribute("data-button-to-replace",e.className),o.insertBefore(s,e)),u([t,o],i.loading))},Cs=(t,e)=>{e.input==="select"||e.input==="radio"?Ts(t,e):["text","email","number","tel","textarea"].some(o=>o===e.input)&&(ke(e.inputValue)||xe(e.inputValue))&&(F(L()),Ls(t,e))},Es=(t,e)=>{const o=t.getInput();if(!o)return null;switch(e.input){case"checkbox":return $s(o);case"radio":return As(o);case"file":return Ss(o);default:return e.inputAutoTrim?o.value.trim():o.value}},$s=t=>t.checked?1:0,As=t=>t.checked?t.value:null,Ss=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Ts=(t,e)=>{const o=w();if(!o)return;const s=n=>{e.input==="select"?Ps(o,be(n),e):e.input==="radio"&&Bs(o,be(n),e)};ke(e.inputOptions)||xe(e.inputOptions)?(F(L()),Y(e.inputOptions).then(n=>{t.hideLoading(),s(n)})):typeof e.inputOptions=="object"?s(e.inputOptions):R(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Ls=(t,e)=>{const o=t.getInput();o&&(g(o),Y(e.inputValue).then(s=>{o.value=e.input==="number"?`${parseFloat(s)||0}`:`${s}`,f(o),o.focus(),t.hideLoading()}).catch(s=>{R(`Error in inputValue promise: ${s}`),o.value="",f(o),o.focus(),t.hideLoading()}))};function Ps(t,e,o){const s=B(t,i.select);if(!s)return;const n=(r,a,l)=>{const d=document.createElement("option");d.value=l,E(d,a),d.selected=vt(l,o.inputValue),r.appendChild(d)};e.forEach(r=>{const a=r[0],l=r[1];if(Array.isArray(l)){const d=document.createElement("optgroup");d.label=a,d.disabled=!1,s.appendChild(d),l.forEach($=>n(d,$[1],$[0]))}else n(s,l,a)}),s.focus()}function Bs(t,e,o){const s=B(t,i.radio);if(!s)return;e.forEach(r=>{const a=r[0],l=r[1],d=document.createElement("input"),$=document.createElement("label");d.type="radio",d.name=i.radio,d.value=a,vt(a,o.inputValue)&&(d.checked=!0);const k=document.createElement("span");E(k,l),k.className=i.label,$.appendChild(d),$.appendChild(k),s.appendChild($)});const n=s.querySelectorAll("input");n.length&&n[0].focus()}const be=t=>(t instanceof Map?Array.from(t):Object.entries(t)).map(([o,s])=>[o,typeof s=="object"?be(s):s]),vt=(t,e)=>!!e&&e!=null&&e.toString()===t.toString(),qs=t=>{const e=h.innerParams.get(t);t.disableButtons(),e.input?yt(t,"confirm"):Oe(t,!0)},Ms=t=>{const e=h.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?yt(t,"deny"):De(t,!1)},Ds=(t,e)=>{t.disableButtons(),e(U.cancel)},yt=(t,e)=>{const o=h.innerParams.get(t);if(!o.input){R(`The "input" parameter is needed to be set when using returnInputValueOn${ye(e)}`);return}const s=t.getInput(),n=Es(t,o);o.inputValidator?Os(t,n,e):s&&!s.checkValidity()?(t.enableButtons(),t.showValidationMessage(o.validationMessage||s.validationMessage)):e==="deny"?De(t,n):Oe(t,n)},Os=(t,e,o)=>{const s=h.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Y(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):o==="deny"?De(t,e):Oe(t,e)})},De=(t,e)=>{const o=h.innerParams.get(t);o.showLoaderOnDeny&&F(N()),o.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Y(o.preDeny(e,o.validationMessage))).then(n=>{n===!1?(t.hideLoading(),Q(t)):t.close({isDenied:!0,value:typeof n>"u"?e:n})}).catch(n=>kt(t,n))):t.close({isDenied:!0,value:e})},Ve=(t,e)=>{t.close({isConfirmed:!0,value:e})},kt=(t,e)=>{t.rejectPromise(e)},Oe=(t,e)=>{const o=h.innerParams.get(t);o.showLoaderOnConfirm&&F(),o.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Y(o.preConfirm(e,o.validationMessage))).then(n=>{y(de())||n===!1?(t.hideLoading(),Q(t)):Ve(t,typeof n>"u"?e:n)}).catch(n=>kt(t,n))):Ve(t,e)};function ie(){const t=h.innerParams.get(this);if(!t)return;const e=h.domCache.get(this);g(e.loader),we()?t.icon&&f(_()):Is(e),A([e.popup,e.actions],i.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const Is=t=>{const e=t.loader.getAttribute("data-button-to-replace"),o=e?t.popup.getElementsByClassName(e):[];o.length?f(o[0],"inline-block"):io()&&g(t.actions)};function xt(){const t=h.innerParams.get(this),e=h.domCache.get(this);return e?he(e.popup,t.input):null}function Ct(t,e,o){const s=h.domCache.get(t);e.forEach(n=>{s[n].disabled=o})}function Et(t,e){const o=w();!o||!t||(t.type==="radio"?o.querySelectorAll(`[name="${i.radio}"]`).forEach(n=>{n.disabled=e}):t.disabled=e)}function $t(){Ct(this,["confirmButton","denyButton","cancelButton"],!1);const t=h.focusedElement.get(this);t instanceof HTMLElement&&document.activeElement===document.body&&t.focus(),h.focusedElement.delete(this)}function At(){h.focusedElement.set(this,document.activeElement),Ct(this,["confirmButton","denyButton","cancelButton"],!0)}function St(){Et(this.getInput(),!1)}function Tt(){Et(this.getInput(),!0)}function Lt(t){const e=h.domCache.get(this),o=h.innerParams.get(this);E(e.validationMessage,t),e.validationMessage.className=i["validation-message"],o.customClass&&o.customClass.validationMessage&&u(e.validationMessage,o.customClass.validationMessage),f(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",i["validation-message"]),ot(s),u(s,i.inputerror))}function Pt(){const t=h.domCache.get(this);t.validationMessage&&g(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),A(e,i.inputerror))}const M={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Hs=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Rs={allowEnterKey:void 0},Ns=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Bt=t=>Object.prototype.hasOwnProperty.call(M,t),qt=t=>Hs.indexOf(t)!==-1,Mt=t=>Rs[t],js=t=>{Bt(t)||b(`Unknown parameter "${t}"`)},zs=t=>{Ns.includes(t)&&b(`The parameter "${t}" is incompatible with toasts`)},Fs=t=>{const e=Mt(t);e&&Je(t,e)},Dt=t=>{t.backdrop===!1&&t.allowOutsideClick&&b('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&b(`Invalid theme "${t.theme}"`);for(const e in t)js(e),t.toast&&zs(e),Fs(e)};function Ot(t){const e=v(),o=w(),s=h.innerParams.get(this);if(!o||P(o,s.hideClass.popup)){b("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const n=Vs(t),r=Object.assign({},s,n);Dt(r),e&&(e.dataset.swal2Theme=r.theme),wt(this,r),h.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Vs=t=>{const e={};return Object.keys(t).forEach(o=>{if(qt(o)){const s=t;e[o]=s[o]}else b(`Invalid parameter to update: ${o}`)}),e};function It(){var t;const e=h.domCache.get(this),o=h.innerParams.get(this);if(!o){Ht(this);return}e.popup&&c.swalCloseEventFinishedCallback&&(c.swalCloseEventFinishedCallback(),delete c.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),(t=c.eventEmitter)===null||t===void 0||t.emit("didDestroy"),_s(this)}const _s=t=>{Ht(t),delete t.params,delete c.keydownHandler,delete c.keydownTarget,delete c.currentInstance},Ht=t=>{t.isAwaitingPromise?(me(h,t),t.isAwaitingPromise=!0):(me(z,t),me(h,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},me=(t,e)=>{for(const o in t)t[o].delete(e)};var Gs=Object.freeze({__proto__:null,_destroy:It,close:q,closeModal:q,closePopup:q,closeToast:q,disableButtons:At,disableInput:Tt,disableLoading:ie,enableButtons:$t,enableInput:St,getInput:xt,handleAwaitingPromise:Q,hideLoading:ie,rejectPromise:bt,resetValidationMessage:Pt,showValidationMessage:Lt,update:Ot});const Ws=(t,e,o)=>{t.toast?Us(t,e,o):(Ks(e),Xs(e),Zs(t,e,o))},Us=(t,e,o)=>{e.popup.onclick=()=>{t&&(Ys(t)||t.timer||t.input)||o(U.close)}},Ys=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let ae=!1;const Ks=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(ae=!0)}}},Xs=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(o){t.popup.onmouseup=()=>{},(o.target===t.popup||o.target instanceof HTMLElement&&t.popup.contains(o.target))&&(ae=!0)}}},Zs=(t,e,o)=>{e.container.onclick=s=>{if(ae){ae=!1;return}s.target===e.container&&ce(t.allowOutsideClick)&&o(U.backdrop)}},Js=t=>typeof t=="object"&&t!==null&&"jquery"in t,_e=t=>t instanceof Element||Js(t),Qs=t=>{const e={};return typeof t[0]=="object"&&!_e(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((o,s)=>{const n=t[s];typeof n=="string"||_e(n)?e[o]=n:n!==void 0&&R(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof n}`)}),e};function en(...t){return new this(...t)}function tn(t){class e extends this{_main(s,n){return super._main(s,Object.assign({},t,n))}}return e}const on=()=>c.timeout&&c.timeout.getTimerLeft(),Rt=()=>{if(c.timeout)return lo(),c.timeout.stop()},Nt=()=>{if(c.timeout){const t=c.timeout.start();return Le(t),t}},sn=()=>{const t=c.timeout;return t&&(t.running?Rt():Nt())},nn=t=>{if(c.timeout){const e=c.timeout.increase(t);return Le(e,!0),e}},rn=()=>!!(c.timeout&&c.timeout.isRunning());let Ge=!1;const ve={};function an(t="data-swal-template"){ve[t]=this,Ge||(document.body.addEventListener("click",ln),Ge=!0)}const ln=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in ve){const s=e.getAttribute&&e.getAttribute(o);if(s){ve[o].fire({template:s});return}}};class cn{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,o){const s=this._getHandlersByEventName(e);s.includes(o)||s.push(o)}once(e,o){const s=(...n)=>{this.removeListener(e,s),o.apply(this,n)};this.on(e,s)}emit(e,...o){this._getHandlersByEventName(e).forEach(s=>{try{s.apply(this,o)}catch(n){console.error(n)}})}removeListener(e,o){const s=this._getHandlersByEventName(e),n=s.indexOf(o);n>-1&&s.splice(n,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}c.eventEmitter=new cn;const dn=(t,e)=>{c.eventEmitter&&c.eventEmitter.on(t,e)},un=(t,e)=>{c.eventEmitter&&c.eventEmitter.once(t,e)},wn=(t,e)=>{if(c.eventEmitter){if(!t){c.eventEmitter.reset();return}e?c.eventEmitter.removeListener(t,e):c.eventEmitter.removeAllListeners(t)}};var hn=Object.freeze({__proto__:null,argsToParams:Qs,bindClickHandler:an,clickCancel:Jo,clickConfirm:ht,clickDeny:Zo,enableLoading:F,fire:en,getActions:X,getCancelButton:G,getCloseButton:$e,getConfirmButton:L,getContainer:v,getDenyButton:N,getFocusableElements:Ae,getFooter:tt,getHtmlContainer:Ce,getIcon:_,getIconContent:to,getImage:et,getInputLabel:oo,getLoader:W,getPopup:w,getProgressSteps:Ee,getTimerLeft:on,getTimerProgressBar:ue,getTitle:Qe,getValidationMessage:de,increaseTimer:nn,isDeprecatedParameter:Mt,isLoading:no,isTimerRunning:rn,isUpdatableParameter:qt,isValidParameter:Bt,isVisible:Xo,mixin:tn,off:wn,on:dn,once:un,resumeTimer:Nt,showLoading:F,stopTimer:Rt,toggleTimer:sn});class pn{constructor(e,o){this.callback=e,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const o=this.running;return o&&this.stop(),this.remaining+=e,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const jt=["swal-title","swal-html","swal-footer"],mn=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const o=e.content;return Cn(o),Object.assign(fn(o),gn(o),bn(o),vn(o),yn(o),kn(o),xn(o,jt))},fn=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(s=>{H(s,["name","value"]);const n=s.getAttribute("name"),r=s.getAttribute("value");!n||!r||(n in M&&typeof M[n]=="boolean"?e[n]=r!=="false":n in M&&typeof M[n]=="object"?e[n]=JSON.parse(r):e[n]=r)}),e},gn=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(s=>{const n=s.getAttribute("name"),r=s.getAttribute("value");!n||!r||(e[n]=new Function(`return ${r}`)())}),e},bn=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(s=>{H(s,["type","color","aria-label"]);const n=s.getAttribute("type");if(!n||!["confirm","cancel","deny"].includes(n))return;e[`${n}ButtonText`]=s.innerHTML,e[`show${ye(n)}Button`]=!0;const r=s.getAttribute("color");r!==null&&(e[`${n}ButtonColor`]=r);const a=s.getAttribute("aria-label");a!==null&&(e[`${n}ButtonAriaLabel`]=a)}),e},vn=t=>{const e={},o=t.querySelector("swal-image");if(o){H(o,["src","width","height","alt"]);const s=o.getAttribute("src");s!==null&&(e.imageUrl=s||void 0);const n=o.getAttribute("width");n!==null&&(e.imageWidth=n||void 0);const r=o.getAttribute("height");r!==null&&(e.imageHeight=r||void 0);const a=o.getAttribute("alt");a!==null&&(e.imageAlt=a||void 0)}return e},yn=t=>{const e={},o=t.querySelector("swal-icon");return o&&(H(o,["type","color"]),o.hasAttribute("type")&&(e.icon=o.getAttribute("type")),o.hasAttribute("color")&&(e.iconColor=o.getAttribute("color")),e.iconHtml=o.innerHTML),e},kn=t=>{const e={},o=t.querySelector("swal-input");o&&(H(o,["type","label","placeholder","value"]),e.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(e.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(e.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(e.inputValue=o.getAttribute("value")));const s=Array.from(t.querySelectorAll("swal-input-option"));return s.length&&(e.inputOptions={},s.forEach(n=>{H(n,["value"]);const r=n.getAttribute("value");if(!r)return;const a=n.innerHTML;e.inputOptions[r]=a})),e},xn=(t,e)=>{const o={};for(const s in e){const n=e[s],r=t.querySelector(n);r&&(H(r,[]),o[n.replace(/^swal-/,"")]=r.innerHTML.trim())}return o},Cn=t=>{const e=jt.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(o=>{const s=o.tagName.toLowerCase();e.includes(s)||b(`Unrecognized element <${s}>`)})},H=(t,e)=>{Array.from(t.attributes).forEach(o=>{e.indexOf(o.name)===-1&&b([`Unrecognized attribute "${o.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},zt=10,En=t=>{var e,o;const s=v(),n=w();if(!s||!n)return;typeof t.willOpen=="function"&&t.willOpen(n),(e=c.eventEmitter)===null||e===void 0||e.emit("willOpen",n);const a=window.getComputedStyle(document.body).overflowY;if(Sn(s,n,t),setTimeout(()=>{$n(s,n)},zt),Se()&&(An(s,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,a),is()),as&&t.backdrop===!1&&n.scrollHeight>s.clientHeight&&(s.style.pointerEvents="auto"),!we()&&!c.previousActiveElement&&(c.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const l=t.didOpen;setTimeout(()=>l(n))}(o=c.eventEmitter)===null||o===void 0||o.emit("didOpen",n)},le=t=>{const e=w();if(!e||t.target!==e)return;const o=v();o&&(e.removeEventListener("animationend",le),e.removeEventListener("transitionend",le),o.style.overflowY="auto",A(o,i["no-transition"]))},$n=(t,e)=>{nt(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",le),e.addEventListener("transitionend",le)):t.style.overflowY="auto"},An=(t,e,o)=>{ls(),e&&o!=="hidden"&&ms(o),setTimeout(()=>{t.scrollTop=0})},Sn=(t,e,o)=>{var s;(s=o.showClass)!==null&&s!==void 0&&s.backdrop&&u(t,o.showClass.backdrop),o.animation?(e.style.setProperty("opacity","0","important"),f(e,"grid"),setTimeout(()=>{var n;(n=o.showClass)!==null&&n!==void 0&&n.popup&&u(e,o.showClass.popup),e.style.removeProperty("opacity")},zt)):f(e,"grid"),u([document.documentElement,document.body],i.shown),o.heightAuto&&o.backdrop&&!o.toast&&u([document.documentElement,document.body],i["height-auto"])};var We={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Tn(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=We.email),t.input==="url"&&(t.inputValidator=We.url))}function Ln(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(b('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Pn(t){Tn(t),t.showLoaderOnConfirm&&!t.preConfirm&&b(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ln(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),go(t)}let T;var ee=new WeakMap;class m{constructor(...e){if(Wt(this,ee,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;T=this;const o=Object.freeze(this.constructor.argsToParams(e));this.params=o,this.isAwaitingPromise=!1,Ut(ee,this,this._main(T.params))}_main(e,o={}){if(Dt(Object.assign({},o,e)),c.currentInstance){const r=z.swalPromiseResolve.get(c.currentInstance),{isAwaitingPromise:a}=c.currentInstance;c.currentInstance._destroy(),a||r({isDismissed:!0}),Se()&&ft()}c.currentInstance=T;const s=qn(e,o);Pn(s),Object.freeze(s),c.timeout&&(c.timeout.stop(),delete c.timeout),clearTimeout(c.restoreFocusTimeout);const n=Mn(T);return wt(T,s),h.innerParams.set(T,s),Bn(T,n,s)}then(e){return Ie(ee,this).then(e)}finally(e){return Ie(ee,this).finally(e)}}const Bn=(t,e,o)=>new Promise((s,n)=>{const r=a=>{t.close({isDismissed:!0,dismiss:a,isConfirmed:!1,isDenied:!1})};z.swalPromiseResolve.set(t,s),z.swalPromiseReject.set(t,n),e.confirmButton.onclick=()=>{qs(t)},e.denyButton.onclick=()=>{Ms(t)},e.cancelButton.onclick=()=>{Ds(t,r)},e.closeButton.onclick=()=>{r(U.close)},Ws(o,e,r),Qo(c,o,r),Cs(t,o),En(o),Dn(c,o,r),On(e,o),setTimeout(()=>{e.container.scrollTop=0})}),qn=(t,e)=>{const o=mn(t),s=Object.assign({},M,e,o,t);return s.showClass=Object.assign({},M.showClass,s.showClass),s.hideClass=Object.assign({},M.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Mn=t=>{const e={popup:w(),container:v(),actions:X(),confirmButton:L(),denyButton:N(),cancelButton:G(),loader:W(),closeButton:$e(),validationMessage:de(),progressSteps:Ee()};return h.domCache.set(t,e),e},Dn=(t,e,o)=>{const s=ue();g(s),e.timer&&(t.timeout=new pn(()=>{o("timer"),delete t.timeout},e.timer),e.timerProgressBar&&s&&(f(s),x(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Le(e.timer)})))},On=(t,e)=>{if(!e.toast){if(!ce(e.allowEnterKey)){Je("allowEnterKey","preConfirm: () => false"),t.popup.focus();return}In(t)||Hn(t,e)||ge(-1,1)}},In=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const o of e)if(o instanceof HTMLElement&&y(o))return o.focus(),!0;return!1},Hn=(t,e)=>e.focusDeny&&y(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&y(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&y(t.confirmButton)?(t.confirmButton.focus(),!0):!1;m.prototype.disableButtons=At;m.prototype.enableButtons=$t;m.prototype.getInput=xt;m.prototype.disableInput=Tt;m.prototype.enableInput=St;m.prototype.hideLoading=ie;m.prototype.disableLoading=ie;m.prototype.showValidationMessage=Lt;m.prototype.resetValidationMessage=Pt;m.prototype.close=q;m.prototype.closePopup=q;m.prototype.closeModal=q;m.prototype.closeToast=q;m.prototype.rejectPromise=bt;m.prototype.update=Ot;m.prototype._destroy=It;Object.assign(m,hn);Object.keys(Gs).forEach(t=>{m[t]=function(...e){if(T&&T[t])return T[t](...e)}});m.DismissReason=U;m.version="11.26.25";const V=m;V.default=V;typeof document<"u"&&(function(t,e){var o=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=e);else try{o.innerHTML=e}catch{o.innerText=e}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const Ft={background:"#f8fbff",color:"#0f172a",iconColor:"#2563eb",confirmButtonColor:"#2563eb",cancelButtonColor:"#64748b",customClass:{popup:"blue-alert-popup",confirmButton:"blue-alert-confirm",cancelButton:"blue-alert-cancel"}},S=({title:t="Confirm action",text:e="This action will be applied to your account."}={})=>V.fire({...Ft,title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonText:"Continue",cancelButtonText:"Cancel"}).then(o=>o.isConfirmed),Ue=({title:t="Enter text",text:e="Please provide the requested value.",inputLabel:o="Value",inputPlaceholder:s="Type here",inputValue:n="",confirmButtonText:r="Save",validationMessage:a="Please enter a value."}={})=>V.fire({...Ft,title:t,text:e,input:"text",inputLabel:o,inputPlaceholder:s,inputValue:n,showCancelButton:!0,confirmButtonText:r,cancelButtonText:"Cancel",preConfirm:l=>{const d=l==null?void 0:l.trim();return d||(V.showValidationMessage(a),!1)}}).then(l=>l.isConfirmed?l.value:null),Rn=(t,e)=>S({title:"Accept mentorship request",text:`Accept "${t}" from ${e}? Schedule a session date below.`}),Nn=t=>S({title:"Reject mentorship request",text:`Are you sure you want to reject "${t}"? This action cannot be undone.`}),jn=t=>S({title:"Mark session as completed",text:`Confirm that you have completed the mentorship session for "${t}".`}),zn=()=>S({title:"Update profile",text:"Confirm to save your profile changes."}),Fn=()=>S({title:"Create new goal",text:"Confirm to create this personal goal."});function Vn(t){return`status-badge status-${t.toLowerCase()}`}function _n(t){return t?new Intl.DateTimeFormat("en",{dateStyle:"medium",timeStyle:"short"}).format(new Date(t)):"Not scheduled"}class Gn{constructor(e){this.root=e}render(e){this.root.innerHTML=`
      <div class="dashboard-layout">
        <aside class="sidebar">
          <div>
            <p class="eyebrow">LEARNING PORTAL</p>
            <h1>MENTOR</h1>
          </div>

          <nav class="sidebar-nav">
            <a class="nav-link active" href="#/coder">Dashboard</a>
            <a class="nav-link" href="#/profile">Profile</a>
          </nav>

          <div class="sidebar-user">
            <strong>${e.firstName} ${e.lastName}</strong>
            <span>Coder · ${e.clanName||"No clan"}</span>
            <button id="logout-button" class="text-button" type="button">Logout</button>
          </div>
        </aside>

        <main class="dashboard-main">
          <header class="dashboard-header">
            <div>
              <p class="eyebrow">CODER DASHBOARD</p>
              <h2>Hello, ${e.firstName}</h2>
              <p>Describe the academic support you need.</p>
            </div>
            <a class="secondary-button" href="#/profile">Edit profile</a>
          </header>

          <div id="dashboard-message" class="message hidden" aria-live="polite"></div>

          <section class="content-grid coder-grid">
            <article class="panel-card">
              <h3>New mentorship request</h3>
              <p class="card-description">
                The topic and description help the Mentor prepare the session.
              </p>

              <form id="request-form" class="form-stack">
                <label class="form-group">
                  <span>Topic</span>
                  <input
                    id="request-topic"
                    class="form-input"
                    maxlength="150"
                    placeholder="Example: JavaScript events"
                    required
                  />
                </label>

                <label class="form-group">
                  <span>Description of the need</span>
                  <textarea
                    id="request-description"
                    class="form-input"
                    rows="6"
                    placeholder="Explain what you have tried and where you are blocked."
                    required
                  ></textarea>
                </label>

                <button id="create-request-button" class="primary-button" type="submit">
                  Submit request
                </button>
              </form>
            </article>

            <section>
              <div class="section-heading">
                <div>
                  <h3>My requests</h3>
                  <p>Track each request from creation to completion.</p>
                </div>
              </div>

              <div id="request-list" class="card-list"></div>
            </section>
          </section>
        </main>
      </div>
    `}bindEvents({onCreate:e,onEdit:o,onDelete:s,onLogout:n}){this.root.querySelector("#request-form").addEventListener("submit",r=>{r.preventDefault(),e({topic:this.root.querySelector("#request-topic").value,description:this.root.querySelector("#request-description").value})}),this.root.querySelector("#request-list").addEventListener("click",r=>{const a=r.target.closest("[data-action='edit']"),l=r.target.closest("[data-action='delete']");a&&o(Number(a.dataset.id)),l&&s(Number(l.dataset.id))}),this.root.querySelector("#logout-button").addEventListener("click",async()=>{await S()&&n()})}renderRequests(e){const o=this.root.querySelector("#request-list");if(e.length===0){o.innerHTML=`
        <div class="empty-state">
          <strong>No requests yet</strong>
          <p>Create your first mentorship request using the form.</p>
        </div>
      `;return}o.innerHTML=e.map(s=>{var n;return`
          <article class="request-card" data-request-id="${s.id}">
            <div class="request-card-header">
              <div>
                <h4>${s.topic}</h4>
                <p>${s.description}</p>
              </div>
              <span class="${Vn(s.status)}">${s.status}</span>
            </div>

            <dl class="request-details">
              <div>
                <dt>Mentor</dt>
                <dd>${((n=s.mentor)==null?void 0:n.name)||"Not assigned"}</dd>
              </div>
              <div>
                <dt>Scheduled date</dt>
                <dd>${_n(s.scheduledAt)}</dd>
              </div>
              <div>
                <dt>Observations</dt>
                <dd>${s.observations||"No observations"}</dd>
              </div>
            </dl>

            ${s.status==="PENDING"?`
                  <div class="card-actions">
                    <button
                      class="secondary-button"
                      data-action="edit"
                      data-id="${s.id}"
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      class="danger-button"
                      data-action="delete"
                      data-id="${s.id}"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                `:""}
          </article>
        `}).join("")}getRequestForEdit(e){const o=this.root.querySelector(`[data-request-id="${e}"]`);return o?{topic:o.querySelector("h4").textContent,description:o.querySelector(".request-card-header p").textContent}:null}resetForm(){this.root.querySelector("#request-form").reset()}setCreating(e){const o=this.root.querySelector("#create-request-button");o.disabled=e,o.textContent=e?"Submitting...":"Submit request"}showMessage(e,o="success"){const s=this.root.querySelector("#dashboard-message");s.textContent=e,s.className=`message message-${o}`}}function Wn(t){return`status-badge status-${t.toLowerCase()}`}function Un(t){return t?new Intl.DateTimeFormat("en",{dateStyle:"medium",timeStyle:"short"}).format(new Date(t)):"Not scheduled"}class Yn{constructor(e){this.root=e}render(e){this.root.innerHTML=`
      <div class="dashboard-layout">
        <aside class="sidebar">
          <div>
            <p class="eyebrow">MENTOR PORTAL</p>
            <h1>MENTOR</h1>
          </div>

          <nav class="sidebar-nav">
            <a class="nav-link active" href="#/mentor">Dashboard</a>
            <a class="nav-link" href="#/profile">Profile</a>
          </nav>

          <div class="sidebar-user">
            <strong>${e.firstName} ${e.lastName}</strong>
            <span>Mentor</span>
            <button id="logout-button" class="text-button" type="button">Logout</button>
          </div>
        </aside>

        <main class="dashboard-main">
          <header class="dashboard-header">
            <div>
              <p class="eyebrow">MENTOR DASHBOARD</p>
              <h2>Hello, ${e.firstName}</h2>
              <p>Review requests, schedule sessions and record results.</p>
            </div>
            <a  class="secondary-button" href="#/profile">Edit profile</a>
          </header>

          <div id="dashboard-message" class="message hidden" aria-live="polite"></div>

          <section>
            <div class="section-heading">
              <div>
                <h3>Mentorship requests</h3>
                <p>Pending requests appear first.</p>
              </div>
            </div>

            <div id="request-list" class="card-list"></div>
          </section>
        </main>
      </div>
    `}bindEvents({onStatusChange:e,onLogout:o}){this.root.querySelector("#request-list").addEventListener("click",s=>{var d,$;const n=s.target.closest("[data-status]");if(!n)return;const r=n.closest("[data-request-id]"),a=n.dataset.status,l=Number(r.dataset.requestId);e(l,{status:a,scheduledAt:((d=r.querySelector("[data-field='scheduledAt']"))==null?void 0:d.value)||null,observations:(($=r.querySelector("[data-field='observations']"))==null?void 0:$.value)||""})}),this.root.querySelector("#logout-button").addEventListener("click",async()=>{await S()&&o()})}renderRequests(e){const o=this.root.querySelector("#request-list");if(e.length===0){o.innerHTML=`
        <div class="empty-state">
          <strong>No mentorship requests</strong>
          <p>New requests will appear here.</p>
        </div>
      `;return}o.innerHTML=e.map(s=>this.requestTemplate(s)).join("")}requestTemplate(e){var n;const o=e.status==="PENDING"?`
        <div class="mentor-form">
          <label class="form-group">
            <span>Session date</span>
            <input
              class="form-input"
              data-field="scheduledAt"
              type="datetime-local"
            />
          </label>

          <label class="form-group">
            <span>Observations</span>
            <textarea
              class="form-input"
              data-field="observations"
              rows="3"
              placeholder="Topics, preparation or reason for rejection"
            ></textarea>
          </label>

          <div class="card-actions">
            <button class="primary-button compact" data-status="ACCEPTED" type="button">
              Accept and schedule
            </button>
            <button class="danger-button" data-status="REJECTED" type="button">
              Reject
            </button>
          </div>
        </div>
      `:"",s=e.status==="ACCEPTED"?`
        <div class="mentor-form">
          <label class="form-group">
            <span>Final observations</span>
            <textarea
              class="form-input"
              data-field="observations"
              rows="3"
              placeholder="Record the result of the session"
            >${e.observations}</textarea>
          </label>

          <button class="primary-button compact" data-status="COMPLETED" type="button">
            Mark as completed
          </button>
        </div>
      `:"";return`
      <article class="request-card" data-request-id="${e.id}">
        <div class="request-card-header">
          <div>
            <p class="request-owner">
              ${e.coder.name} · ${e.coder.clan}
            </p>
            <h4>${e.topic}</h4>
            <p>${e.description}</p>
          </div>
          <span class="${Wn(e.status)}">${e.status}</span>
        </div>

        <dl class="request-details">
          <div>
            <dt>Assigned Mentor</dt>
            <dd>${((n=e.mentor)==null?void 0:n.name)||"Not assigned"}</dd>
          </div>
          <div>
            <dt>Scheduled date</dt>
            <dd>${Un(e.scheduledAt)}</dd>
          </div>
          <div>
            <dt>Observations</dt>
            <dd>${e.observations||"No observations"}</dd>
          </div>
        </dl>

        ${o}
        ${s}
      </article>
    `}showMessage(e,o="success"){const s=this.root.querySelector("#dashboard-message");s.textContent=e,s.className=`message message-${o}`}}class Kn{constructor(e){this.root=e}render({user:e,clans:o}){const s=e.role==="CODER"?"#/coder":"#/mentor";this.root.innerHTML=`
      <div class="dashboard-layout">
        <aside class="sidebar">
          <div>
            <p class="eyebrow">USER PROFILE</p>
            <h1>MENTOR</h1>
          </div>

          <nav class="sidebar-nav">
            <a class="nav-link" href="${s}">Dashboard</a>
            <a class="nav-link active" href="#/profile">Profile</a>
          </nav>

          <div class="sidebar-user">
            <strong>${e.firstName} ${e.lastName}</strong>
            <span>${e.role}</span>
            <button id="logout-button" class="text-button" type="button" aria-label="Logout from the current session">
              Logout
            </button>
          </div>
        </aside>

        <main class="dashboard-main narrow-content">
          <header class="dashboard-header">
            <div>
              <p class="eyebrow">PROFILE</p>
              <h2>Personal information</h2>
              <p>Keep the data used by the mentorship process updated.</p>
            </div>
          </header>

          <div id="profile-message" class="message hidden" aria-live="polite"></div>

          <article class="panel-card">
            <form id="profile-form" class="form-stack">
              <div class="form-grid">
                <label class="form-group">
                  <span>First name</span>
                  <input
                    id="profile-first-name"
                    class="form-input"
                    value="${e.firstName}"
                    required
                  />
                </label>

                <label class="form-group">
                  <span>Last name</span>
                  <input
                    id="profile-last-name"
                    class="form-input"
                    value="${e.lastName}"
                    required
                  />
                </label>
              </div>

              <label class="form-group">
                <span>Email</span>
                <input class="form-input" value="${e.email}" disabled />
              </label>

              <label class="form-group">
                <span>Role</span>
                <input class="form-input" value="${e.role}" disabled />
              </label>

              ${e.role==="CODER"?`
                    <label class="form-group">
                      <span>Clan</span>
                      <select id="profile-clan" class="form-input" required>
                        ${o.map(n=>`
                              <option
                                value="${n.id}"
                                ${Number(e.clanId)===Number(n.id)?"selected":""}
                              >
                                ${n.name}
                              </option>
                            `).join("")}
                      </select>
                    </label>
                  `:""}

              <label class="form-group">
                <span>Biography</span>
                <textarea
                  id="profile-biography"
                  class="form-input"
                  rows="6"
                  placeholder="Write a short professional description"
                >${e.biography||""}</textarea>
              </label>

              <button id="save-profile-button" class="primary-button" type="submit">
                Save changes
              </button>
            </form>
          </article>
                <section class="goals-section">
  <div class="section-header">
    <div>
      <h2>Personal goals</h2>
      <p>
        Create goals and track your personal progress.
      </p>
    </div>
  </div>

  <form id="goal-form" class="goal-form">
    <div class="form-group">
      <label for="goal-title">Goal title</label>

      <input
        id="goal-title"
        class="form-input"
        type="text"
        maxlength="150"
        placeholder="Example: Complete the JavaScript module"
        required
      />
    </div>

    <div class="form-group">
      <label for="goal-description">Description</label>

      <textarea
        id="goal-description"
        class="form-input"
        rows="4"
        placeholder="Describe what you want to achieve"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="goal-due-date">Due date</label>

      <input
        id="goal-due-date"
        class="form-input"
        type="date"
        required
      />
    </div>

    <button
      id="goal-submit-button"
      class="primary-button"
      type="submit"
    >
      Add goal
    </button>
  </form>

  <p
    id="goals-message"
    class="message hidden"
    aria-live="polite"
  ></p>

  <div id="goals-list" class="goals-list"></div>
</section>
        </main>
      </div>

    `}bindEvents({onSave:e,onLogout:o}){this.root.querySelector("#profile-form").addEventListener("submit",n=>{var r;n.preventDefault(),e({firstName:this.root.querySelector("#profile-first-name").value,lastName:this.root.querySelector("#profile-last-name").value,biography:this.root.querySelector("#profile-biography").value,clanId:((r=this.root.querySelector("#profile-clan"))==null?void 0:r.value)||null})});const s=this.root.querySelector("#logout-button");s&&s.addEventListener("click",async()=>{await S()&&o()})}setLoading(e){const o=this.root.querySelector("#save-profile-button");o.disabled=e,o.textContent=e?"Saving...":"Save changes"}showMessage(e,o="success"){const s=this.root.querySelector("#profile-message");s.textContent=e,s.className=`message message-${o}`}getGoalData(){return{title:this.root.querySelector("#goal-title").value.trim(),description:this.root.querySelector("#goal-description").value.trim(),dueDate:this.root.querySelector("#goal-due-date").value}}clearGoalForm(){var e;(e=this.root.querySelector("#goal-form"))==null||e.reset()}renderGoals(e){const o=this.root.querySelector("#goals-list");if(!e.length){o.innerHTML=`
      <div class="empty-state">
        <p>You do not have personal goals yet.</p>
      </div>
    `;return}o.innerHTML=e.map(s=>{const r=new Date(`${s.due_date}T00:00:00`).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return`
        <article
          class="goal-item ${s.completed?"goal-completed":""}"
        >
          <label class="goal-check">
            <input
              class="goal-checkbox"
              type="checkbox"
              data-goal-id="${s.id}"
              ${s.completed?"checked":""}
            />

            <span class="goal-checkmark"></span>
          </label>

          <div class="goal-content">
            <div class="goal-title-row">
              <h3>${this.escapeHtml(s.title)}</h3>

              <time datetime="${s.due_date}">
                ${r}
              </time>
            </div>

            <p>
              ${this.escapeHtml(s.description)||"No description"}
            </p>
          </div>

          <button
            class="goal-delete-button"
            type="button"
            data-goal-id="${s.id}"
            aria-label="Delete goal"
          >
            Delete
          </button>
        </article>
      `}).join("")}escapeHtml(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}showGoalMessage(e,o="success"){const s=this.root.querySelector("#goals-message");s&&(s.textContent=e,s.className=`message message-${o}`)}bindGoalEvents({onCreate:e,onToggle:o,onDelete:s}){const n=this.root.querySelector("#goal-form"),r=this.root.querySelector("#goals-list");!n||!r||(n.addEventListener("submit",async a=>{a.preventDefault(),await e(this.getGoalData())}),r.addEventListener("change",async a=>{const l=a.target.closest(".goal-checkbox");l&&await o(Number(l.dataset.goalId),l.checked)}),r.addEventListener("click",async a=>{const l=a.target.closest(".goal-delete-button");!l||!await S({title:"Delete goal",text:"Are you sure you want to delete this goal? This action cannot be undone."})||await s(Number(l.dataset.goalId))}))}}class Xn{constructor({api:e,router:o,view:s,initialTab:n}){this.api=e,this.router=o,this.view=s,this.initialTab=n}async init(){try{const e=await this.api.get("/users/clans");this.view.render({initialTab:this.initialTab,clans:e.data}),this.view.prepareButtons(),this.view.bindEvents({onLogin:o=>this.login(o),onRegister:o=>this.register(o)})}catch(e){this.view.render({initialTab:this.initialTab,clans:[]}),this.view.prepareButtons(),this.view.showMessage(e.message)}}async login(e){this.view.clearMessage(),this.view.setLoading("login-button",!0);try{const o=await this.api.post("/auth/login",e);this.router.goToDashboard(o.data.role)}catch(o){this.view.showMessage(o.message)}finally{this.view.setLoading("login-button",!1)}}async register(e){if(this.view.clearMessage(),e.password!==e.confirmPassword){this.view.showMessage("The passwords do not match.");return}this.view.setLoading("register-button",!0);try{const o=await this.api.post("/auth/register",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,role:e.role,clanId:e.clanId});this.router.goToDashboard(o.data.role)}catch(o){this.view.showMessage(o.message)}finally{this.view.setLoading("register-button",!1)}}}class Ye{constructor({api:e,router:o,view:s,user:n}){this.api=e,this.router=o,this.view=s,this.user=n,this.requests=[]}async init(){this.view.render(this.user),this.view.bindEvents({onCreate:e=>this.createRequest(e),onEdit:e=>this.editRequest(e),onDelete:e=>this.deleteRequest(e),onStatusChange:(e,o)=>this.changeStatus(e,o),onLogout:()=>this.logout()}),await this.loadRequests()}async loadRequests(){try{const e=await this.api.get("/mentorships");this.requests=e.data,this.view.renderRequests(this.requests)}catch(e){this.view.showMessage(e.message,"error")}}async createRequest(e){var o,s,n,r,a,l;(s=(o=this.view).setCreating)==null||s.call(o,!0);try{const d=await this.api.post("/mentorships",e);this.view.showMessage(d.message),(r=(n=this.view).resetForm)==null||r.call(n),await this.loadRequests()}catch(d){this.view.showMessage(d.message,"error")}finally{(l=(a=this.view).setCreating)==null||l.call(a,!1)}}async editRequest(e){const o=this.requests.find(a=>a.id===e);if(!o||!await S({title:"Edit mentorship request",text:"You are about to update the topic and description of this request."}))return;const n=await Ue({title:"Edit topic",text:"Update the topic for this mentorship request.",inputLabel:"Topic",inputValue:o.topic,confirmButtonText:"Continue"});if(n===null)return;const r=await Ue({title:"Edit description",text:"Update the description for this mentorship request.",inputLabel:"Description",inputValue:o.description,confirmButtonText:"Continue"});if(r!==null)try{const a=await this.api.patch(`/mentorships/${e}`,{topic:n,description:r});this.view.showMessage(a.message),await this.loadRequests()}catch(a){this.view.showMessage(a.message,"error")}}async deleteRequest(e){if(await S({title:"Delete request",text:"Are you sure you want to delete this mentorship request? This action cannot be undone."}))try{const s=await this.api.delete(`/mentorships/${e}`);this.view.showMessage(s.message),await this.loadRequests()}catch(s){this.view.showMessage(s.message,"error")}}async changeStatus(e,o){var r;const s=this.requests.find(a=>a.id===e);if(!s)return;let n=!0;if(o.status==="ACCEPTED"?n=await Rn(s.topic,((r=s.coder)==null?void 0:r.name)||"Coder"):o.status==="REJECTED"?n=await Nn(s.topic):o.status==="COMPLETED"&&(n=await jn(s.topic)),!!n)try{const a=await this.api.patch(`/mentorships/${e}`,o);this.view.showMessage(a.message),await this.loadRequests()}catch(a){this.view.showMessage(a.message,"error")}}async logout(){try{await this.api.post("/auth/logout")}finally{this.router.navigate("/login")}}}class Zn{constructor({api:e,router:o,view:s,user:n}){this.api=e,this.router=o,this.view=s,this.user=n}async init(){try{const[e,o]=await Promise.all([this.api.get("/users/me"),this.api.get("/users/clans")]);this.user=e.data,this.view.render({user:this.user,clans:o.data}),this.view.bindEvents({onSave:s=>this.save(s),onLogout:()=>this.logout()})}catch{this.router.navigate("/login")}this.view.bindGoalEvents({onCreate:e=>this.createGoal(e),onToggle:(e,o)=>this.toggleGoal(e,o),onDelete:e=>this.deleteGoal(e)}),await this.loadGoals()}async loadGoals(){try{const e=await this.api.get("/users/me/goals");this.view.renderGoals(e.data)}catch(e){this.view.showGoalMessage(e.message,"error")}}async save(e){if(await zn()){this.view.setLoading(!0);try{const s=await this.api.put("/users/me",e);this.user=s.data,this.view.showMessage(s.message)}catch(s){this.view.showMessage(s.message,"error")}finally{this.view.setLoading(!1)}}}async createGoal(e){if(await Fn())try{await this.api.post("/users/me/goals",e),this.view.clearGoalForm(),this.view.showGoalMessage("Goal created successfully.","success"),await this.loadGoals()}catch(s){this.view.showGoalMessage(s.message,"error")}}async toggleGoal(e,o){try{await this.api.patch(`/users/me/goals/${e}`,{completed:o}),await this.loadGoals()}catch(s){this.view.showGoalMessage(s.message,"error"),await this.loadGoals()}}async deleteGoal(e){try{await this.api.delete(`/users/me/goals/${e}`),this.view.showGoalMessage("Goal deleted successfully.","success"),await this.loadGoals()}catch(o){this.view.showGoalMessage(o.message,"error")}}async logout(){try{await this.api.post("/auth/logout")}finally{this.router.navigate("/login")}}}class Jn{constructor({root:e,api:o}){this.root=e,this.api=o,this.currentController=null}start(){if(window.addEventListener("hashchange",()=>this.render()),!window.location.hash){this.navigate("/login");return}this.render()}navigate(e){window.location.hash=`#${e}`}goToDashboard(e){this.navigate(e==="CODER"?"/coder":"/mentor")}async getSession(){try{return(await this.api.get("/auth/me")).data}catch{return null}}async render(){const e=window.location.hash.slice(1)||"/login",o=await this.getSession();if(["/login","/register"].includes(e)){if(o){this.goToDashboard(o.role);return}const s=new _t(this.root);this.currentController=new Xn({api:this.api,router:this,view:s,initialTab:e==="/register"?"register":"login"}),await this.currentController.init();return}if(!o){this.navigate("/login");return}if(e==="/coder"){if(o.role!=="CODER"){this.goToDashboard(o.role);return}const s=new Gn(this.root);this.currentController=new Ye({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}if(e==="/mentor"){if(o.role!=="MENTOR"){this.goToDashboard(o.role);return}const s=new Yn(this.root);this.currentController=new Ye({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}if(e==="/profile"){const s=new Kn(this.root);this.currentController=new Zn({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}this.root.innerHTML=`
      <section class="not-found">
        <h1>404</h1>
        <p>The requested page does not exist.</p>
        <a class="primary-button inline-button" href="#/login">Return</a>
      </section>
    `}}const Qn=document.querySelector("#app"),er=new Vt("/api"),tr=new Jn({root:Qn,api:er});tr.start();
