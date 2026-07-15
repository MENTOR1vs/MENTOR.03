(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();class zt{constructor(e="/api"){this.baseUrl=e}async request(e,o={}){try{const s=await fetch(`${this.baseUrl}${e}`,{credentials:"include",headers:{"Content-Type":"application/json",...o.headers},...o}),n=await s.json();if(!s.ok)throw new Error(n.message||"The request failed.");return n}catch(s){throw s instanceof TypeError?new Error("The server could not be reached."):s}}get(e){return this.request(e)}post(e,o={}){return this.request(e,{method:"POST",body:JSON.stringify(o)})}put(e,o={}){return this.request(e,{method:"PUT",body:JSON.stringify(o)})}patch(e,o={}){return this.request(e,{method:"PATCH",body:JSON.stringify(o)})}delete(e){return this.request(e,{method:"DELETE"})}}class Ft{constructor(e){this.root=e}render({initialTab:e="login",clans:o=[]}={}){this.root.innerHTML=`
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
    `}bindEvents({onLogin:e,onRegister:o}){const s=this.root.querySelector("#login-tab"),n=this.root.querySelector("#register-tab"),r=this.root.querySelector("#login-section"),a=this.root.querySelector("#register-section"),c=this.root.querySelector("#clan-group"),d=this.root.querySelector("#register-clan"),$=k=>{const M=k==="login";r.classList.toggle("hidden",!M),a.classList.toggle("hidden",M),s.classList.toggle("active",M),n.classList.toggle("active",!M),this.clearMessage()};s.addEventListener("click",()=>$("login")),n.addEventListener("click",()=>$("register")),this.root.querySelectorAll('input[name="role"]').forEach(k=>{k.addEventListener("change",()=>{const M=k.value==="CODER"&&k.checked;c.classList.toggle("hidden",!M),d.required=M})}),this.root.querySelector("#login-form").addEventListener("submit",k=>{k.preventDefault(),e(this.getLoginData())}),this.root.querySelector("#register-form").addEventListener("submit",k=>{k.preventDefault(),o(this.getRegisterData())})}getLoginData(){return{email:this.root.querySelector("#login-email").value,password:this.root.querySelector("#login-password").value}}getRegisterData(){const e=this.root.querySelector('input[name="role"]:checked').value;return{firstName:this.root.querySelector("#register-first-name").value,lastName:this.root.querySelector("#register-last-name").value,email:this.root.querySelector("#register-email").value,password:this.root.querySelector("#register-password").value,confirmPassword:this.root.querySelector("#register-confirm-password").value,role:e,clanId:e==="CODER"?Number(this.root.querySelector("#register-clan").value):null}}setLoading(e,o){const s=this.root.querySelector(`#${e}`);s&&(s.disabled=o,s.textContent=o?"Processing...":s.dataset.originalText)}prepareButtons(){["login-button","register-button"].forEach(e=>{const o=this.root.querySelector(`#${e}`);o.dataset.originalText=o.textContent.trim()})}showMessage(e,o="error"){const s=this.root.querySelector("#auth-message");s.textContent=e,s.className=`message message-${o}`}clearMessage(){const e=this.root.querySelector("#auth-message");e.textContent="",e.className="message hidden"}}/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/function Ye(t,e,o){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:o;throw new TypeError("Private element is not present on this object")}function Vt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ie(t,e){return t.get(Ye(t,e))}function _t(t,e,o){Vt(t,e),e.set(t,o)}function Gt(t,e,o){return t.set(Ye(t,e),o),o}const Wt=100,l={},Ut=()=>{l.previousActiveElement instanceof HTMLElement?(l.previousActiveElement.focus(),l.previousActiveElement=null):document.body&&document.body.focus()},Yt=t=>new Promise(e=>{if(!t)return e();const o=window.scrollX,s=window.scrollY;l.restoreFocusTimeout=setTimeout(()=>{Ut(),e()},Wt),window.scrollTo(o,s)}),Ke="swal2-",Kt=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],i=Kt.reduce((t,e)=>(t[e]=Ke+e,t),{}),Xt=["success","warning","info","question","error"],Q=Xt.reduce((t,e)=>(t[e]=Ke+e,t),{}),Xe="SweetAlert2:",ve=t=>t.charAt(0).toUpperCase()+t.slice(1),b=t=>{console.warn(`${Xe} ${typeof t=="object"?t.join(" "):t}`)},H=t=>{console.error(`${Xe} ${t}`)},He=[],Zt=t=>{He.includes(t)||(He.push(t),b(t))},Ze=(t,e=null)=>{Zt(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},le=t=>typeof t=="function"?t():t,ye=t=>t&&typeof t.toPromise=="function",W=t=>ye(t)?t.toPromise():Promise.resolve(t),ke=t=>t&&Promise.resolve(t)===t,Jt=()=>navigator.userAgent.includes("Firefox"),v=()=>document.body.querySelector(`.${i.container}`),U=t=>{const e=v();return e?e.querySelector(t):null},C=t=>U(`.${t}`),w=()=>C(i.popup),F=()=>C(i.icon),Qt=()=>C(i["icon-content"]),Je=()=>C(i.title),xe=()=>C(i["html-container"]),Qe=()=>C(i.image),Ce=()=>C(i["progress-steps"]),ce=()=>C(i["validation-message"]),L=()=>U(`.${i.actions} .${i.confirm}`),V=()=>U(`.${i.actions} .${i.cancel}`),R=()=>U(`.${i.actions} .${i.deny}`),eo=()=>C(i["input-label"]),_=()=>U(`.${i.loader}`),Y=()=>C(i.actions),et=()=>C(i.footer),de=()=>C(i["timer-progress-bar"]),Ee=()=>C(i.close),to=`
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
`,$e=()=>{const t=w();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(e).sort((r,a)=>{const c=parseInt(r.getAttribute("tabindex")||"0"),d=parseInt(a.getAttribute("tabindex")||"0");return c>d?1:c<d?-1:0}),s=t.querySelectorAll(to),n=Array.from(s).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(n))].filter(r=>y(r))},Se=()=>P(document.body,i.shown)&&!P(document.body,i["toast-shown"])&&!P(document.body,i["no-backdrop"]),ue=()=>{const t=w();return t?P(t,i.toast):!1},oo=()=>{const t=w();return t?t.hasAttribute("data-loading"):!1},E=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html"),n=s.querySelector("head");n&&Array.from(n.childNodes).forEach(a=>{t.appendChild(a)});const r=s.querySelector("body");r&&Array.from(r.childNodes).forEach(a=>{a instanceof HTMLVideoElement||a instanceof HTMLAudioElement?t.appendChild(a.cloneNode(!0)):t.appendChild(a)})}},P=(t,e)=>e?e.split(/\s+/).every(o=>t.classList.contains(o)):!1,so=(t,e)=>{Array.from(t.classList).forEach(o=>{!Object.values(i).includes(o)&&!Object.values(Q).includes(o)&&!Object.values(e.showClass||{}).includes(o)&&t.classList.remove(o)})},x=(t,e,o)=>{if(so(t,e),!e.customClass)return;const s=e.customClass[o];if(s){if(typeof s!="string"&&!s.forEach){b(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof s}"`);return}u(t,s)}},we=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${i.popup} > .${i[e]}`);case"checkbox":return t.querySelector(`.${i.popup} > .${i.checkbox} input`);case"radio":return t.querySelector(`.${i.popup} > .${i.radio} input:checked`)||t.querySelector(`.${i.popup} > .${i.radio} input:first-child`);case"range":return t.querySelector(`.${i.popup} > .${i.range} input`);default:return t.querySelector(`.${i.popup} > .${i.input}`)}},tt=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},ot=(t,e,o)=>{if(!t||!e)return;const s=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(t)?t:[t]).forEach(r=>{s.forEach(a=>{o?r.classList.add(a):r.classList.remove(a)})})},u=(t,e)=>{ot(t,e,!0)},S=(t,e)=>{ot(t,e,!1)},T=(t,e)=>Array.from(t.children).find(o=>o instanceof HTMLElement&&P(o,e)),O=(t,e,o)=>{o===`${parseInt(`${o}`)}`&&(o=parseInt(o)),o||o===0?t.style.setProperty(e,typeof o=="number"?`${o}px`:o):t.style.removeProperty(e)},f=(t,e="flex")=>{t&&(t.style.display=e)},g=t=>{t&&(t.style.display="none")},Ae=(t,e="block")=>{t&&new MutationObserver(()=>{K(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Re=(t,e,o,s)=>{const n=t.querySelector(e);n&&n.style.setProperty(o,s)},K=(t,e,o="flex")=>{e?f(t,o):g(t)},y=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),no=()=>!y(L())&&!y(R())&&!y(V()),me=t=>t.scrollHeight>t.clientHeight,ro=(t,e)=>{let o=t;for(;o&&o!==e;){if(me(o))return!0;o=o.parentElement}return!1},st=t=>{const e=window.getComputedStyle(t),o=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return o>0||s>0},Le=(t,e=!1)=>{const o=de();o&&y(o)&&(e&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${t/1e3}s linear`,o.style.width="0%"},10))},io=()=>{const t=de();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const o=parseInt(window.getComputedStyle(t).width),s=e/o*100;t.style.width=`${s}%`},ao=()=>typeof window>"u"||typeof document>"u",lo=`
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
`.replace(/(^|\n)\s*/g,""),co=()=>{const t=v();return t?(t.remove(),S([document.documentElement,document.body],[i["no-backdrop"],i["toast-shown"],i["has-column"]]),!0):!1},D=()=>{l.currentInstance&&l.currentInstance.resetValidationMessage()},uo=()=>{const t=w();if(!t)return;const e=T(t,i.input),o=T(t,i.file),s=t.querySelector(`.${i.range} input`),n=t.querySelector(`.${i.range} output`),r=T(t,i.select),a=t.querySelector(`.${i.checkbox} input`),c=T(t,i.textarea);e&&(e.oninput=D),o&&(o.onchange=D),r&&(r.onchange=D),a&&(a.onchange=D),c&&(c.oninput=D),s&&n&&(s.oninput=()=>{D(),n.value=s.value},s.onchange=()=>{D(),n.value=s.value})},wo=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},ho=t=>{const e=w();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},po=t=>{window.getComputedStyle(t).direction==="rtl"&&(u(v(),i.rtl),l.isRTL=!0)},mo=t=>{const e=co();if(ao()){H("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=i.container,e&&u(o,i["no-transition"]),E(o,lo),o.dataset.swal2Theme=t.theme;const s=wo(t.target||"body");s.appendChild(o),t.topLayer&&(o.setAttribute("popover",""),o.showPopover()),ho(t),po(s),uo()},Pe=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?fo(t,e):t&&E(e,t)},fo=(t,e)=>{"jquery"in t?go(e,t):E(e,t.toString())},go=(t,e)=>{if(t.textContent="",0 in e)for(let o=0;o in e;o++)t.appendChild(e[o].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},bo=(t,e)=>{const o=Y(),s=_();!o||!s||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?g(o):f(o),x(o,e,"actions"),vo(o,s,e),E(s,e.loaderHtml||""),x(s,e,"loader"))};function vo(t,e,o){const s=L(),n=R(),r=V();!s||!n||!r||(he(s,"confirm",o),he(n,"deny",o),he(r,"cancel",o),yo(s,n,r,o),o.reverseButtons&&(o.toast?(t.insertBefore(r,s),t.insertBefore(n,s)):(t.insertBefore(r,e),t.insertBefore(n,e),t.insertBefore(s,e))))}function yo(t,e,o,s){if(!s.buttonsStyling){S([t,e,o],i.styled);return}u([t,e,o],i.styled),[[t,"confirm",s.confirmButtonColor],[e,"deny",s.denyButtonColor],[o,"cancel",s.cancelButtonColor]].forEach(([r,a,c])=>{c&&r.style.setProperty(`--swal2-${a}-button-background-color`,c),ko(r)})}function ko(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function he(t,e,o){const s=ve(e);K(t,o[`show${s}Button`],"inline-block"),E(t,o[`${e}ButtonText`]||""),t.setAttribute("aria-label",o[`${e}ButtonAriaLabel`]||""),t.className=i[e],x(t,o,`${e}Button`)}const xo=(t,e)=>{const o=Ee();o&&(E(o,e.closeButtonHtml||""),x(o,e,"closeButton"),K(o,e.showCloseButton),o.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Co=(t,e)=>{const o=v();o&&(Eo(o,e.backdrop),$o(o,e.position),So(o,e.grow),x(o,e,"container"))};function Eo(t,e){typeof e=="string"?t.style.background=e:e||u([document.documentElement,document.body],i["no-backdrop"])}function $o(t,e){e&&(e in i?u(t,i[e]):(b('The "position" parameter is not valid, defaulting to "center"'),u(t,i.center)))}function So(t,e){e&&u(t,i[`grow-${e}`])}var h={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const Ao=["input","file","range","select","radio","checkbox","textarea"],Lo=(t,e)=>{const o=w();if(!o)return;const s=h.innerParams.get(t),n=!s||e.input!==s.input;Ao.forEach(r=>{const a=T(o,i[r]);a&&(Bo(r,e.inputAttributes),a.className=i[r],n&&g(a))}),e.input&&(n&&Po(e),qo(e))},Po=t=>{if(!t.input)return;if(!p[t.input]){H(`Unexpected type of input! Expected ${Object.keys(p).join(" | ")}, got "${t.input}"`);return}const e=nt(t.input);if(!e)return;const o=p[t.input](e,t);f(e),t.inputAutoFocus&&setTimeout(()=>{tt(o)})},To=t=>{for(const{name:e}of Array.from(t.attributes))["id","type","value","style"].includes(e)||t.removeAttribute(e)},Bo=(t,e)=>{const o=w();if(!o)return;const s=we(o,t);if(s){To(s);for(const n in e)s.setAttribute(n,e[n])}},qo=t=>{if(!t.input)return;const e=nt(t.input);e&&x(e,t,"input")},Te=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},X=(t,e,o)=>{if(o.inputLabel){const s=document.createElement("label"),n=i["input-label"];s.setAttribute("for",t.id),s.className=n,typeof o.customClass=="object"&&u(s,o.customClass.inputLabel),s.innerText=o.inputLabel,e.insertAdjacentElement("beforebegin",s)}},nt=t=>{const e=w();if(e)return T(e,i[t]||i.input)},ee=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:ke(e)||b(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},p={};p.text=p.email=p.password=p.number=p.tel=p.url=p.search=p.date=p["datetime-local"]=p.time=p.week=p.month=(t,e)=>{const o=t;return ee(o,e.inputValue),X(o,o,e),Te(o,e),o.type=e.input,o};p.file=(t,e)=>{const o=t;return X(o,o,e),Te(o,e),o};p.range=(t,e)=>{const o=t,s=o.querySelector("input"),n=o.querySelector("output");return s&&(ee(s,e.inputValue),s.type=e.input,X(s,t,e)),n&&ee(n,e.inputValue),t};p.select=(t,e)=>{const o=t;if(o.textContent="",e.inputPlaceholder){const s=document.createElement("option");E(s,e.inputPlaceholder),s.value="",s.disabled=!0,s.selected=!0,o.appendChild(s)}return X(o,o,e),o};p.radio=t=>{const e=t;return e.textContent="",t};p.checkbox=(t,e)=>{const o=w();if(!o)throw new Error("Popup not found");const s=we(o,"checkbox");if(!s)throw new Error("Checkbox input not found");s.value="1",s.checked=!!e.inputValue;const r=t.querySelector("span");if(r){const a=e.inputPlaceholder||e.inputLabel;a&&E(r,a)}return s};p.textarea=(t,e)=>{const o=t;ee(o,e.inputValue),Te(o,e),X(o,o,e);const s=n=>parseInt(window.getComputedStyle(n).marginLeft)+parseInt(window.getComputedStyle(n).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const n=w();if(!n)return;const r=parseInt(window.getComputedStyle(n).width),a=()=>{if(!document.body.contains(o))return;const c=o.offsetWidth+s(o),d=w();d&&(c>r?d.style.width=`${c}px`:O(d,"width",e.width))};new MutationObserver(a).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const Mo=(t,e)=>{const o=xe();o&&(Ae(o),x(o,e,"htmlContainer"),e.html?(Pe(e.html,o),f(o,"block")):e.text?(o.textContent=e.text,f(o,"block")):g(o),Lo(t,e))},Do=(t,e)=>{const o=et();o&&(Ae(o),K(o,!!e.footer,"block"),e.footer&&Pe(e.footer,o),x(o,e,"footer"))},Oo=(t,e)=>{const o=h.innerParams.get(t),s=F();if(!s)return;if(o&&e.icon===o.icon){je(s,e),Ne(s,e);return}if(!e.icon&&!e.iconHtml){g(s);return}if(e.icon&&Object.keys(Q).indexOf(e.icon)===-1){H(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),g(s);return}f(s),je(s,e),Ne(s,e),u(s,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",rt)},Ne=(t,e)=>{for(const[o,s]of Object.entries(Q))e.icon!==o&&S(t,s);u(t,e.icon&&Q[e.icon]),Ro(t,e),rt(),x(t,e,"icon")},rt=()=>{const t=w();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color");t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(s=>{s.style.backgroundColor=e})},Io=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Ho=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,je=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let o=t.innerHTML,s="";e.iconHtml?s=ze(e.iconHtml):e.icon==="success"?(s=Io(e),o=o.replace(/ style=".*?"/g,"")):e.icon==="error"?s=Ho:e.icon&&(s=ze({question:"?",warning:"!",info:"i"}[e.icon])),o.trim()!==s.trim()&&E(t,s)},Ro=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Re(t,o,"background-color",e.iconColor);Re(t,".swal2-success-ring","border-color",e.iconColor)}},ze=t=>`<div class="${i["icon-content"]}">${t}</div>`,No=(t,e)=>{const o=Qe();if(o){if(!e.imageUrl){g(o);return}f(o,""),o.setAttribute("src",e.imageUrl),o.setAttribute("alt",e.imageAlt||""),O(o,"width",e.imageWidth),O(o,"height",e.imageHeight),o.className=i.image,x(o,e,"image")}};let Be=!1,it=0,at=0,lt=0,ct=0;const jo=t=>{t.addEventListener("mousedown",te),document.body.addEventListener("mousemove",oe),t.addEventListener("mouseup",se),t.addEventListener("touchstart",te),document.body.addEventListener("touchmove",oe),t.addEventListener("touchend",se)},zo=t=>{t.removeEventListener("mousedown",te),document.body.removeEventListener("mousemove",oe),t.removeEventListener("mouseup",se),t.removeEventListener("touchstart",te),document.body.removeEventListener("touchmove",oe),t.removeEventListener("touchend",se)},te=t=>{const e=w();if(!e)return;const o=F();if(t.target===e||o&&o.contains(t.target)){Be=!0;const s=dt(t);it=s.clientX,at=s.clientY,lt=parseInt(e.style.insetInlineStart)||0,ct=parseInt(e.style.insetBlockStart)||0,u(e,"swal2-dragging")}},oe=t=>{const e=w();if(e&&Be){let{clientX:o,clientY:s}=dt(t);const n=o-it;e.style.insetInlineStart=`${lt+(l.isRTL?-n:n)}px`,e.style.insetBlockStart=`${ct+(s-at)}px`}},se=()=>{const t=w();Be=!1,S(t,"swal2-dragging")},dt=t=>{const e=t.type.startsWith("touch")?t.touches[0]:t;return{clientX:e.clientX,clientY:e.clientY}},Fo=(t,e)=>{const o=v(),s=w();if(!(!o||!s)){if(e.toast){O(o,"width",e.width),s.style.width="100%";const n=_();n&&s.insertBefore(n,F())}else O(s,"width",e.width);O(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),g(ce()),Vo(s,e),e.draggable&&!e.toast?(u(s,i.draggable),jo(s)):(S(s,i.draggable),zo(s))}},Vo=(t,e)=>{const o=e.showClass||{};t.className=`${i.popup} ${y(t)?o.popup:""}`,e.toast?(u([document.documentElement,document.body],i["toast-shown"]),u(t,i.toast)):u(t,i.modal),x(t,e,"popup"),typeof e.customClass=="string"&&u(t,e.customClass),e.icon&&u(t,i[`icon-${e.icon}`])},_o=(t,e)=>{const o=Ce();if(!o)return;const{progressSteps:s,currentProgressStep:n}=e;if(!s||s.length===0||n===void 0){g(o);return}f(o),o.textContent="",n>=s.length&&b("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((r,a)=>{const c=Go(r);if(o.appendChild(c),a===n&&u(c,i["active-progress-step"]),a!==s.length-1){const d=Wo(e);o.appendChild(d)}})},Go=t=>{const e=document.createElement("li");return u(e,i["progress-step"]),E(e,t),e},Wo=t=>{const e=document.createElement("li");return u(e,i["progress-step-line"]),t.progressStepsDistance&&O(e,"width",t.progressStepsDistance),e},Uo=(t,e)=>{const o=Je();o&&(Ae(o),K(o,!!(e.title||e.titleText),"block"),e.title&&Pe(e.title,o),e.titleText&&(o.innerText=e.titleText),x(o,e,"title"))},ut=(t,e)=>{var o;Fo(t,e),Co(t,e),_o(t,e),Oo(t,e),No(t,e),Uo(t,e),xo(t,e),Mo(t,e),bo(t,e),Do(t,e);const s=w();typeof e.didRender=="function"&&s&&e.didRender(s),(o=l.eventEmitter)===null||o===void 0||o.emit("didRender",s)},Yo=()=>y(w()),wt=()=>{var t;return(t=L())===null||t===void 0?void 0:t.click()},Ko=()=>{var t;return(t=R())===null||t===void 0?void 0:t.click()},Xo=()=>{var t;return(t=V())===null||t===void 0?void 0:t.click()},G=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ht=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},Zo=(t,e,o)=>{if(ht(t),!e.toast){const s=r=>Qo(e,r,o);t.keydownHandler=s;const n=e.keydownListenerCapture?window:w();if(n){t.keydownTarget=n,t.keydownListenerCapture=e.keydownListenerCapture;const r=s;t.keydownTarget.addEventListener("keydown",r,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},fe=(t,e)=>{var o;const s=$e();return s.length?(t=t+e,t===-2&&(t=s.length-1),t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus(),!(Jt()&&s[t]instanceof HTMLIFrameElement)):((o=w())===null||o===void 0||o.focus(),!0)},pt=["ArrowRight","ArrowDown"],Jo=["ArrowLeft","ArrowUp"],Qo=(t,e,o)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?es(e,t):e.key==="Tab"?ts(e):[...pt,...Jo].includes(e.key)?os(e.key):e.key==="Escape"&&ss(e,t,o)))},es=(t,e)=>{if(!le(e.allowEnterKey))return;const o=w();if(!o||!e.input)return;const s=we(o,e.input);if(t.target&&s&&t.target instanceof HTMLElement&&t.target.outerHTML===s.outerHTML){if(["textarea","file"].includes(e.input))return;wt(),t.preventDefault()}},ts=t=>{const e=t.target,s=$e().findIndex(r=>r===e);let n=!0;t.shiftKey?n=fe(s,-1):n=fe(s,1),t.stopPropagation(),n&&t.preventDefault()},os=t=>{const e=Y(),o=L(),s=R(),n=V();if(!e||!o||!s||!n)return;const r=[o,s,n];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const a=pt.includes(t)?"nextElementSibling":"previousElementSibling";let c=document.activeElement;if(c){for(let d=0;d<e.children.length;d++){if(c=c[a],!c)return;if(c instanceof HTMLButtonElement&&y(c))break}c instanceof HTMLButtonElement&&c.focus()}},ss=(t,e,o)=>{t.preventDefault(),le(e.allowEscapeKey)&&o(G.esc)};var j={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const ns=()=>{const t=v();Array.from(document.body.children).forEach(o=>{o.contains(t)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},mt=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},qe=typeof window<"u"&&!!window.GestureEvent,rs=qe&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,is=()=>{if(qe&&!P(document.body,i.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,u(document.body,i.iosfix),as()}},as=()=>{const t=v();if(!t)return;let e;t.ontouchstart=o=>{e=ls(o)},t.ontouchmove=o=>{e&&(o.preventDefault(),o.stopPropagation())}},ls=t=>{const e=t.target,o=v(),s=xe();return!o||!s||cs(t)||ds(t)?!1:e===o||!me(o)&&e instanceof HTMLElement&&!ro(e,s)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(me(s)&&s.contains(e))},cs=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),ds=t=>t.touches&&t.touches.length>1,us=()=>{if(P(document.body,i.iosfix)){const t=parseInt(document.body.style.top,10);S(document.body,i.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},ws=()=>{const t=document.createElement("div");t.className=i["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let N=null;const hs=t=>{N===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(N=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${N+ws()}px`)},ps=()=>{N!==null&&(document.body.style.paddingRight=`${N}px`,N=null)};function ft(t,e,o,s){ue()?Fe(t,s):(Yt(o).then(()=>Fe(t,s)),ht(l)),qe?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Se()&&(ps(),us(),mt()),ms()}function ms(){S([document.documentElement,document.body],[i.shown,i["height-auto"],i["no-backdrop"],i["toast-shown"]])}function B(t){t=gs(t);const e=j.swalPromiseResolve.get(this),o=fs(this);this.isAwaitingPromise?t.isDismissed||(Z(this),e(t)):o&&e(t)}const fs=t=>{const e=w();if(!e)return!1;const o=h.innerParams.get(t);if(!o||P(e,o.hideClass.popup))return!1;S(e,o.showClass.popup),u(e,o.hideClass.popup);const s=v();return S(s,o.showClass.backdrop),u(s,o.hideClass.backdrop),bs(t,e,o),!0};function gt(t){const e=j.swalPromiseReject.get(this);Z(this),e&&e(t)}const Z=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,h.innerParams.get(t)||t._destroy())},gs=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),bs=(t,e,o)=>{var s;const n=v(),r=st(e);typeof o.willClose=="function"&&o.willClose(e),(s=l.eventEmitter)===null||s===void 0||s.emit("willClose",e),r&&n?vs(t,e,n,!!o.returnFocus,o.didClose):n&&ft(t,n,!!o.returnFocus,o.didClose)},vs=(t,e,o,s,n)=>{l.swalCloseEventFinishedCallback=ft.bind(null,t,o,s,n);const r=function(a){if(a.target===e){var c;(c=l.swalCloseEventFinishedCallback)===null||c===void 0||c.call(l),delete l.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Fe=(t,e)=>{setTimeout(()=>{var o;typeof e=="function"&&e.bind(t.params)(),(o=l.eventEmitter)===null||o===void 0||o.emit("didClose"),t._destroy&&t._destroy()})},z=t=>{let e=w();if(e||new ae,e=w(),!e)return;const o=_();ue()?g(F()):ys(e,t),f(o),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},ys=(t,e)=>{const o=Y(),s=_();!o||!s||(!e&&y(L())&&(e=L()),f(o),e&&(g(e),s.setAttribute("data-button-to-replace",e.className),o.insertBefore(s,e)),u([t,o],i.loading))},ks=(t,e)=>{e.input==="select"||e.input==="radio"?Ss(t,e):["text","email","number","tel","textarea"].some(o=>o===e.input)&&(ye(e.inputValue)||ke(e.inputValue))&&(z(L()),As(t,e))},xs=(t,e)=>{const o=t.getInput();if(!o)return null;switch(e.input){case"checkbox":return Cs(o);case"radio":return Es(o);case"file":return $s(o);default:return e.inputAutoTrim?o.value.trim():o.value}},Cs=t=>t.checked?1:0,Es=t=>t.checked?t.value:null,$s=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Ss=(t,e)=>{const o=w();if(!o)return;const s=n=>{e.input==="select"?Ls(o,ge(n),e):e.input==="radio"&&Ps(o,ge(n),e)};ye(e.inputOptions)||ke(e.inputOptions)?(z(L()),W(e.inputOptions).then(n=>{t.hideLoading(),s(n)})):typeof e.inputOptions=="object"?s(e.inputOptions):H(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},As=(t,e)=>{const o=t.getInput();o&&(g(o),W(e.inputValue).then(s=>{o.value=e.input==="number"?`${parseFloat(s)||0}`:`${s}`,f(o),o.focus(),t.hideLoading()}).catch(s=>{H(`Error in inputValue promise: ${s}`),o.value="",f(o),o.focus(),t.hideLoading()}))};function Ls(t,e,o){const s=T(t,i.select);if(!s)return;const n=(r,a,c)=>{const d=document.createElement("option");d.value=c,E(d,a),d.selected=bt(c,o.inputValue),r.appendChild(d)};e.forEach(r=>{const a=r[0],c=r[1];if(Array.isArray(c)){const d=document.createElement("optgroup");d.label=a,d.disabled=!1,s.appendChild(d),c.forEach($=>n(d,$[1],$[0]))}else n(s,c,a)}),s.focus()}function Ps(t,e,o){const s=T(t,i.radio);if(!s)return;e.forEach(r=>{const a=r[0],c=r[1],d=document.createElement("input"),$=document.createElement("label");d.type="radio",d.name=i.radio,d.value=a,bt(a,o.inputValue)&&(d.checked=!0);const k=document.createElement("span");E(k,c),k.className=i.label,$.appendChild(d),$.appendChild(k),s.appendChild($)});const n=s.querySelectorAll("input");n.length&&n[0].focus()}const ge=t=>(t instanceof Map?Array.from(t):Object.entries(t)).map(([o,s])=>[o,typeof s=="object"?ge(s):s]),bt=(t,e)=>!!e&&e!=null&&e.toString()===t.toString(),Ts=t=>{const e=h.innerParams.get(t);t.disableButtons(),e.input?vt(t,"confirm"):De(t,!0)},Bs=t=>{const e=h.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?vt(t,"deny"):Me(t,!1)},qs=(t,e)=>{t.disableButtons(),e(G.cancel)},vt=(t,e)=>{const o=h.innerParams.get(t);if(!o.input){H(`The "input" parameter is needed to be set when using returnInputValueOn${ve(e)}`);return}const s=t.getInput(),n=xs(t,o);o.inputValidator?Ms(t,n,e):s&&!s.checkValidity()?(t.enableButtons(),t.showValidationMessage(o.validationMessage||s.validationMessage)):e==="deny"?Me(t,n):De(t,n)},Ms=(t,e,o)=>{const s=h.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>W(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):o==="deny"?Me(t,e):De(t,e)})},Me=(t,e)=>{const o=h.innerParams.get(t);o.showLoaderOnDeny&&z(R()),o.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>W(o.preDeny(e,o.validationMessage))).then(n=>{n===!1?(t.hideLoading(),Z(t)):t.close({isDenied:!0,value:typeof n>"u"?e:n})}).catch(n=>yt(t,n))):t.close({isDenied:!0,value:e})},Ve=(t,e)=>{t.close({isConfirmed:!0,value:e})},yt=(t,e)=>{t.rejectPromise(e)},De=(t,e)=>{const o=h.innerParams.get(t);o.showLoaderOnConfirm&&z(),o.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>W(o.preConfirm(e,o.validationMessage))).then(n=>{y(ce())||n===!1?(t.hideLoading(),Z(t)):Ve(t,typeof n>"u"?e:n)}).catch(n=>yt(t,n))):Ve(t,e)};function ne(){const t=h.innerParams.get(this);if(!t)return;const e=h.domCache.get(this);g(e.loader),ue()?t.icon&&f(F()):Ds(e),S([e.popup,e.actions],i.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const Ds=t=>{const e=t.loader.getAttribute("data-button-to-replace"),o=e?t.popup.getElementsByClassName(e):[];o.length?f(o[0],"inline-block"):no()&&g(t.actions)};function kt(){const t=h.innerParams.get(this),e=h.domCache.get(this);return e?we(e.popup,t.input):null}function xt(t,e,o){const s=h.domCache.get(t);e.forEach(n=>{s[n].disabled=o})}function Ct(t,e){const o=w();!o||!t||(t.type==="radio"?o.querySelectorAll(`[name="${i.radio}"]`).forEach(n=>{n.disabled=e}):t.disabled=e)}function Et(){xt(this,["confirmButton","denyButton","cancelButton"],!1);const t=h.focusedElement.get(this);t instanceof HTMLElement&&document.activeElement===document.body&&t.focus(),h.focusedElement.delete(this)}function $t(){h.focusedElement.set(this,document.activeElement),xt(this,["confirmButton","denyButton","cancelButton"],!0)}function St(){Ct(this.getInput(),!1)}function At(){Ct(this.getInput(),!0)}function Lt(t){const e=h.domCache.get(this),o=h.innerParams.get(this);E(e.validationMessage,t),e.validationMessage.className=i["validation-message"],o.customClass&&o.customClass.validationMessage&&u(e.validationMessage,o.customClass.validationMessage),f(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",i["validation-message"]),tt(s),u(s,i.inputerror))}function Pt(){const t=h.domCache.get(this);t.validationMessage&&g(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),S(e,i.inputerror))}const q={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Os=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Is={allowEnterKey:void 0},Hs=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Tt=t=>Object.prototype.hasOwnProperty.call(q,t),Bt=t=>Os.indexOf(t)!==-1,qt=t=>Is[t],Rs=t=>{Tt(t)||b(`Unknown parameter "${t}"`)},Ns=t=>{Hs.includes(t)&&b(`The parameter "${t}" is incompatible with toasts`)},js=t=>{const e=qt(t);e&&Ze(t,e)},Mt=t=>{t.backdrop===!1&&t.allowOutsideClick&&b('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&b(`Invalid theme "${t.theme}"`);for(const e in t)Rs(e),t.toast&&Ns(e),js(e)};function Dt(t){const e=v(),o=w(),s=h.innerParams.get(this);if(!o||P(o,s.hideClass.popup)){b("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const n=zs(t),r=Object.assign({},s,n);Mt(r),e&&(e.dataset.swal2Theme=r.theme),ut(this,r),h.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const zs=t=>{const e={};return Object.keys(t).forEach(o=>{if(Bt(o)){const s=t;e[o]=s[o]}else b(`Invalid parameter to update: ${o}`)}),e};function Ot(){var t;const e=h.domCache.get(this),o=h.innerParams.get(this);if(!o){It(this);return}e.popup&&l.swalCloseEventFinishedCallback&&(l.swalCloseEventFinishedCallback(),delete l.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),(t=l.eventEmitter)===null||t===void 0||t.emit("didDestroy"),Fs(this)}const Fs=t=>{It(t),delete t.params,delete l.keydownHandler,delete l.keydownTarget,delete l.currentInstance},It=t=>{t.isAwaitingPromise?(pe(h,t),t.isAwaitingPromise=!0):(pe(j,t),pe(h,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},pe=(t,e)=>{for(const o in t)t[o].delete(e)};var Vs=Object.freeze({__proto__:null,_destroy:Ot,close:B,closeModal:B,closePopup:B,closeToast:B,disableButtons:$t,disableInput:At,disableLoading:ne,enableButtons:Et,enableInput:St,getInput:kt,handleAwaitingPromise:Z,hideLoading:ne,rejectPromise:gt,resetValidationMessage:Pt,showValidationMessage:Lt,update:Dt});const _s=(t,e,o)=>{t.toast?Gs(t,e,o):(Us(e),Ys(e),Ks(t,e,o))},Gs=(t,e,o)=>{e.popup.onclick=()=>{t&&(Ws(t)||t.timer||t.input)||o(G.close)}},Ws=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let re=!1;const Us=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(re=!0)}}},Ys=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(o){t.popup.onmouseup=()=>{},(o.target===t.popup||o.target instanceof HTMLElement&&t.popup.contains(o.target))&&(re=!0)}}},Ks=(t,e,o)=>{e.container.onclick=s=>{if(re){re=!1;return}s.target===e.container&&le(t.allowOutsideClick)&&o(G.backdrop)}},Xs=t=>typeof t=="object"&&t!==null&&"jquery"in t,_e=t=>t instanceof Element||Xs(t),Zs=t=>{const e={};return typeof t[0]=="object"&&!_e(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((o,s)=>{const n=t[s];typeof n=="string"||_e(n)?e[o]=n:n!==void 0&&H(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof n}`)}),e};function Js(...t){return new this(...t)}function Qs(t){class e extends this{_main(s,n){return super._main(s,Object.assign({},t,n))}}return e}const en=()=>l.timeout&&l.timeout.getTimerLeft(),Ht=()=>{if(l.timeout)return io(),l.timeout.stop()},Rt=()=>{if(l.timeout){const t=l.timeout.start();return Le(t),t}},tn=()=>{const t=l.timeout;return t&&(t.running?Ht():Rt())},on=t=>{if(l.timeout){const e=l.timeout.increase(t);return Le(e,!0),e}},sn=()=>!!(l.timeout&&l.timeout.isRunning());let Ge=!1;const be={};function nn(t="data-swal-template"){be[t]=this,Ge||(document.body.addEventListener("click",rn),Ge=!0)}const rn=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in be){const s=e.getAttribute&&e.getAttribute(o);if(s){be[o].fire({template:s});return}}};class an{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,o){const s=this._getHandlersByEventName(e);s.includes(o)||s.push(o)}once(e,o){const s=(...n)=>{this.removeListener(e,s),o.apply(this,n)};this.on(e,s)}emit(e,...o){this._getHandlersByEventName(e).forEach(s=>{try{s.apply(this,o)}catch(n){console.error(n)}})}removeListener(e,o){const s=this._getHandlersByEventName(e),n=s.indexOf(o);n>-1&&s.splice(n,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}l.eventEmitter=new an;const ln=(t,e)=>{l.eventEmitter&&l.eventEmitter.on(t,e)},cn=(t,e)=>{l.eventEmitter&&l.eventEmitter.once(t,e)},dn=(t,e)=>{if(l.eventEmitter){if(!t){l.eventEmitter.reset();return}e?l.eventEmitter.removeListener(t,e):l.eventEmitter.removeAllListeners(t)}};var un=Object.freeze({__proto__:null,argsToParams:Zs,bindClickHandler:nn,clickCancel:Xo,clickConfirm:wt,clickDeny:Ko,enableLoading:z,fire:Js,getActions:Y,getCancelButton:V,getCloseButton:Ee,getConfirmButton:L,getContainer:v,getDenyButton:R,getFocusableElements:$e,getFooter:et,getHtmlContainer:xe,getIcon:F,getIconContent:Qt,getImage:Qe,getInputLabel:eo,getLoader:_,getPopup:w,getProgressSteps:Ce,getTimerLeft:en,getTimerProgressBar:de,getTitle:Je,getValidationMessage:ce,increaseTimer:on,isDeprecatedParameter:qt,isLoading:oo,isTimerRunning:sn,isUpdatableParameter:Bt,isValidParameter:Tt,isVisible:Yo,mixin:Qs,off:dn,on:ln,once:cn,resumeTimer:Rt,showLoading:z,stopTimer:Ht,toggleTimer:tn});class wn{constructor(e,o){this.callback=e,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const o=this.running;return o&&this.stop(),this.remaining+=e,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Nt=["swal-title","swal-html","swal-footer"],hn=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const o=e.content;return kn(o),Object.assign(pn(o),mn(o),fn(o),gn(o),bn(o),vn(o),yn(o,Nt))},pn=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(s=>{I(s,["name","value"]);const n=s.getAttribute("name"),r=s.getAttribute("value");!n||!r||(n in q&&typeof q[n]=="boolean"?e[n]=r!=="false":n in q&&typeof q[n]=="object"?e[n]=JSON.parse(r):e[n]=r)}),e},mn=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(s=>{const n=s.getAttribute("name"),r=s.getAttribute("value");!n||!r||(e[n]=new Function(`return ${r}`)())}),e},fn=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(s=>{I(s,["type","color","aria-label"]);const n=s.getAttribute("type");if(!n||!["confirm","cancel","deny"].includes(n))return;e[`${n}ButtonText`]=s.innerHTML,e[`show${ve(n)}Button`]=!0;const r=s.getAttribute("color");r!==null&&(e[`${n}ButtonColor`]=r);const a=s.getAttribute("aria-label");a!==null&&(e[`${n}ButtonAriaLabel`]=a)}),e},gn=t=>{const e={},o=t.querySelector("swal-image");if(o){I(o,["src","width","height","alt"]);const s=o.getAttribute("src");s!==null&&(e.imageUrl=s||void 0);const n=o.getAttribute("width");n!==null&&(e.imageWidth=n||void 0);const r=o.getAttribute("height");r!==null&&(e.imageHeight=r||void 0);const a=o.getAttribute("alt");a!==null&&(e.imageAlt=a||void 0)}return e},bn=t=>{const e={},o=t.querySelector("swal-icon");return o&&(I(o,["type","color"]),o.hasAttribute("type")&&(e.icon=o.getAttribute("type")),o.hasAttribute("color")&&(e.iconColor=o.getAttribute("color")),e.iconHtml=o.innerHTML),e},vn=t=>{const e={},o=t.querySelector("swal-input");o&&(I(o,["type","label","placeholder","value"]),e.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(e.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(e.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(e.inputValue=o.getAttribute("value")));const s=Array.from(t.querySelectorAll("swal-input-option"));return s.length&&(e.inputOptions={},s.forEach(n=>{I(n,["value"]);const r=n.getAttribute("value");if(!r)return;const a=n.innerHTML;e.inputOptions[r]=a})),e},yn=(t,e)=>{const o={};for(const s in e){const n=e[s],r=t.querySelector(n);r&&(I(r,[]),o[n.replace(/^swal-/,"")]=r.innerHTML.trim())}return o},kn=t=>{const e=Nt.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(o=>{const s=o.tagName.toLowerCase();e.includes(s)||b(`Unrecognized element <${s}>`)})},I=(t,e)=>{Array.from(t.attributes).forEach(o=>{e.indexOf(o.name)===-1&&b([`Unrecognized attribute "${o.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},jt=10,xn=t=>{var e,o;const s=v(),n=w();if(!s||!n)return;typeof t.willOpen=="function"&&t.willOpen(n),(e=l.eventEmitter)===null||e===void 0||e.emit("willOpen",n);const a=window.getComputedStyle(document.body).overflowY;if($n(s,n,t),setTimeout(()=>{Cn(s,n)},jt),Se()&&(En(s,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,a),ns()),rs&&t.backdrop===!1&&n.scrollHeight>s.clientHeight&&(s.style.pointerEvents="auto"),!ue()&&!l.previousActiveElement&&(l.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const c=t.didOpen;setTimeout(()=>c(n))}(o=l.eventEmitter)===null||o===void 0||o.emit("didOpen",n)},ie=t=>{const e=w();if(!e||t.target!==e)return;const o=v();o&&(e.removeEventListener("animationend",ie),e.removeEventListener("transitionend",ie),o.style.overflowY="auto",S(o,i["no-transition"]))},Cn=(t,e)=>{st(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",ie),e.addEventListener("transitionend",ie)):t.style.overflowY="auto"},En=(t,e,o)=>{is(),e&&o!=="hidden"&&hs(o),setTimeout(()=>{t.scrollTop=0})},$n=(t,e,o)=>{var s;(s=o.showClass)!==null&&s!==void 0&&s.backdrop&&u(t,o.showClass.backdrop),o.animation?(e.style.setProperty("opacity","0","important"),f(e,"grid"),setTimeout(()=>{var n;(n=o.showClass)!==null&&n!==void 0&&n.popup&&u(e,o.showClass.popup),e.style.removeProperty("opacity")},jt)):f(e,"grid"),u([document.documentElement,document.body],i.shown),o.heightAuto&&o.backdrop&&!o.toast&&u([document.documentElement,document.body],i["height-auto"])};var We={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Sn(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=We.email),t.input==="url"&&(t.inputValidator=We.url))}function An(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(b('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Ln(t){Sn(t),t.showLoaderOnConfirm&&!t.preConfirm&&b(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),An(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),mo(t)}let A;var J=new WeakMap;class m{constructor(...e){if(_t(this,J,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;A=this;const o=Object.freeze(this.constructor.argsToParams(e));this.params=o,this.isAwaitingPromise=!1,Gt(J,this,this._main(A.params))}_main(e,o={}){if(Mt(Object.assign({},o,e)),l.currentInstance){const r=j.swalPromiseResolve.get(l.currentInstance),{isAwaitingPromise:a}=l.currentInstance;l.currentInstance._destroy(),a||r({isDismissed:!0}),Se()&&mt()}l.currentInstance=A;const s=Tn(e,o);Ln(s),Object.freeze(s),l.timeout&&(l.timeout.stop(),delete l.timeout),clearTimeout(l.restoreFocusTimeout);const n=Bn(A);return ut(A,s),h.innerParams.set(A,s),Pn(A,n,s)}then(e){return Ie(J,this).then(e)}finally(e){return Ie(J,this).finally(e)}}const Pn=(t,e,o)=>new Promise((s,n)=>{const r=a=>{t.close({isDismissed:!0,dismiss:a,isConfirmed:!1,isDenied:!1})};j.swalPromiseResolve.set(t,s),j.swalPromiseReject.set(t,n),e.confirmButton.onclick=()=>{Ts(t)},e.denyButton.onclick=()=>{Bs(t)},e.cancelButton.onclick=()=>{qs(t,r)},e.closeButton.onclick=()=>{r(G.close)},_s(o,e,r),Zo(l,o,r),ks(t,o),xn(o),qn(l,o,r),Mn(e,o),setTimeout(()=>{e.container.scrollTop=0})}),Tn=(t,e)=>{const o=hn(t),s=Object.assign({},q,e,o,t);return s.showClass=Object.assign({},q.showClass,s.showClass),s.hideClass=Object.assign({},q.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Bn=t=>{const e={popup:w(),container:v(),actions:Y(),confirmButton:L(),denyButton:R(),cancelButton:V(),loader:_(),closeButton:Ee(),validationMessage:ce(),progressSteps:Ce()};return h.domCache.set(t,e),e},qn=(t,e,o)=>{const s=de();g(s),e.timer&&(t.timeout=new wn(()=>{o("timer"),delete t.timeout},e.timer),e.timerProgressBar&&s&&(f(s),x(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Le(e.timer)})))},Mn=(t,e)=>{if(!e.toast){if(!le(e.allowEnterKey)){Ze("allowEnterKey","preConfirm: () => false"),t.popup.focus();return}Dn(t)||On(t,e)||fe(-1,1)}},Dn=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const o of e)if(o instanceof HTMLElement&&y(o))return o.focus(),!0;return!1},On=(t,e)=>e.focusDeny&&y(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&y(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&y(t.confirmButton)?(t.confirmButton.focus(),!0):!1;m.prototype.disableButtons=$t;m.prototype.enableButtons=Et;m.prototype.getInput=kt;m.prototype.disableInput=At;m.prototype.enableInput=St;m.prototype.hideLoading=ne;m.prototype.disableLoading=ne;m.prototype.showValidationMessage=Lt;m.prototype.resetValidationMessage=Pt;m.prototype.close=B;m.prototype.closePopup=B;m.prototype.closeModal=B;m.prototype.closeToast=B;m.prototype.rejectPromise=gt;m.prototype.update=Dt;m.prototype._destroy=Ot;Object.assign(m,un);Object.keys(Vs).forEach(t=>{m[t]=function(...e){if(A&&A[t])return A[t](...e)}});m.DismissReason=G;m.version="11.26.25";const ae=m;ae.default=ae;typeof document<"u"&&(function(t,e){var o=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=e);else try{o.innerHTML=e}catch{o.innerText=e}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const In={background:"#f8fbff",color:"#0f172a",iconColor:"#2563eb",confirmButtonColor:"#2563eb",cancelButtonColor:"#64748b",customClass:{popup:"blue-alert-popup",confirmButton:"blue-alert-confirm",cancelButton:"blue-alert-cancel"}},Oe=()=>ae.fire({...In,title:"Confirm action",text:"This action will be applied to your account.",icon:"question",showCancelButton:!0,confirmButtonText:"Continue",cancelButtonText:"Cancel"}).then(t=>t.isConfirmed);function Hn(t){return`status-badge status-${t.toLowerCase()}`}function Rn(t){return t?new Intl.DateTimeFormat("en",{dateStyle:"medium",timeStyle:"short"}).format(new Date(t)):"Not scheduled"}class Nn{constructor(e){this.root=e}render(e){this.root.innerHTML=`
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
    `}bindEvents({onCreate:e,onEdit:o,onDelete:s,onLogout:n}){this.root.querySelector("#request-form").addEventListener("submit",r=>{r.preventDefault(),e({topic:this.root.querySelector("#request-topic").value,description:this.root.querySelector("#request-description").value})}),this.root.querySelector("#request-list").addEventListener("click",r=>{const a=r.target.closest("[data-action='edit']"),c=r.target.closest("[data-action='delete']");a&&o(Number(a.dataset.id)),c&&s(Number(c.dataset.id))}),this.root.querySelector("#logout-button").addEventListener("click",async()=>{await Oe()&&n()})}renderRequests(e){const o=this.root.querySelector("#request-list");if(e.length===0){o.innerHTML=`
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
              <span class="${Hn(s.status)}">${s.status}</span>
            </div>

            <dl class="request-details">
              <div>
                <dt>Mentor</dt>
                <dd>${((n=s.mentor)==null?void 0:n.name)||"Not assigned"}</dd>
              </div>
              <div>
                <dt>Scheduled date</dt>
                <dd>${Rn(s.scheduledAt)}</dd>
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
        `}).join("")}getRequestForEdit(e){const o=this.root.querySelector(`[data-request-id="${e}"]`);return o?{topic:o.querySelector("h4").textContent,description:o.querySelector(".request-card-header p").textContent}:null}resetForm(){this.root.querySelector("#request-form").reset()}setCreating(e){const o=this.root.querySelector("#create-request-button");o.disabled=e,o.textContent=e?"Submitting...":"Submit request"}showMessage(e,o="success"){const s=this.root.querySelector("#dashboard-message");s.textContent=e,s.className=`message message-${o}`}}function jn(t){return`status-badge status-${t.toLowerCase()}`}function zn(t){return t?new Intl.DateTimeFormat("en",{dateStyle:"medium",timeStyle:"short"}).format(new Date(t)):"Not scheduled"}class Fn{constructor(e){this.root=e}render(e){this.root.innerHTML=`
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
            <a class="secondary-button" href="#/profile">Edit profile</a>
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
    `}bindEvents({onStatusChange:e,onLogout:o}){this.root.querySelector("#request-list").addEventListener("click",s=>{var d,$;const n=s.target.closest("[data-status]");if(!n)return;const r=n.closest("[data-request-id]"),a=n.dataset.status,c=Number(r.dataset.requestId);e(c,{status:a,scheduledAt:((d=r.querySelector("[data-field='scheduledAt']"))==null?void 0:d.value)||null,observations:(($=r.querySelector("[data-field='observations']"))==null?void 0:$.value)||""})}),this.root.querySelector("#logout-button").addEventListener("click",async()=>{await Oe()&&o()})}renderRequests(e){const o=this.root.querySelector("#request-list");if(e.length===0){o.innerHTML=`
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
          <span class="${jn(e.status)}">${e.status}</span>
        </div>

        <dl class="request-details">
          <div>
            <dt>Assigned Mentor</dt>
            <dd>${((n=e.mentor)==null?void 0:n.name)||"Not assigned"}</dd>
          </div>
          <div>
            <dt>Scheduled date</dt>
            <dd>${zn(e.scheduledAt)}</dd>
          </div>
          <div>
            <dt>Observations</dt>
            <dd>${e.observations||"No observations"}</dd>
          </div>
        </dl>

        ${o}
        ${s}
      </article>
    `}showMessage(e,o="success"){const s=this.root.querySelector("#dashboard-message");s.textContent=e,s.className=`message message-${o}`}}class Vn{constructor(e){this.root=e}render({user:e,clans:o}){const s=e.role==="CODER"?"#/coder":"#/mentor";this.root.innerHTML=`
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

    `}bindEvents({onSave:e,onLogout:o}){this.root.querySelector("#profile-form").addEventListener("submit",n=>{var r;n.preventDefault(),e({firstName:this.root.querySelector("#profile-first-name").value,lastName:this.root.querySelector("#profile-last-name").value,biography:this.root.querySelector("#profile-biography").value,clanId:((r=this.root.querySelector("#profile-clan"))==null?void 0:r.value)||null})});const s=this.root.querySelector("#logout-button");s&&s.addEventListener("click",async()=>{await Oe()&&o()})}setLoading(e){const o=this.root.querySelector("#save-profile-button");o.disabled=e,o.textContent=e?"Saving...":"Save changes"}showMessage(e,o="success"){const s=this.root.querySelector("#profile-message");s.textContent=e,s.className=`message message-${o}`}getGoalData(){return{title:this.root.querySelector("#goal-title").value.trim(),description:this.root.querySelector("#goal-description").value.trim(),dueDate:this.root.querySelector("#goal-due-date").value}}clearGoalForm(){var e;(e=this.root.querySelector("#goal-form"))==null||e.reset()}renderGoals(e){const o=this.root.querySelector("#goals-list");if(!e.length){o.innerHTML=`
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
      `}).join("")}escapeHtml(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}showGoalMessage(e,o="success"){const s=this.root.querySelector("#goals-message");s&&(s.textContent=e,s.className=`message message-${o}`)}bindGoalEvents({onCreate:e,onToggle:o,onDelete:s}){const n=this.root.querySelector("#goal-form"),r=this.root.querySelector("#goals-list");!n||!r||(n.addEventListener("submit",async a=>{a.preventDefault(),await e(this.getGoalData())}),r.addEventListener("change",async a=>{const c=a.target.closest(".goal-checkbox");c&&await o(Number(c.dataset.goalId),c.checked)}),r.addEventListener("click",async a=>{const c=a.target.closest(".goal-delete-button");!c||!window.confirm("Are you sure you want to delete this goal?")||await s(Number(c.dataset.goalId))}))}}class _n{constructor({api:e,router:o,view:s,initialTab:n}){this.api=e,this.router=o,this.view=s,this.initialTab=n}async init(){try{const e=await this.api.get("/users/clans");this.view.render({initialTab:this.initialTab,clans:e.data}),this.view.prepareButtons(),this.view.bindEvents({onLogin:o=>this.login(o),onRegister:o=>this.register(o)})}catch(e){this.view.render({initialTab:this.initialTab,clans:[]}),this.view.prepareButtons(),this.view.showMessage(e.message)}}async login(e){this.view.clearMessage(),this.view.setLoading("login-button",!0);try{const o=await this.api.post("/auth/login",e);this.router.goToDashboard(o.data.role)}catch(o){this.view.showMessage(o.message)}finally{this.view.setLoading("login-button",!1)}}async register(e){if(this.view.clearMessage(),e.password!==e.confirmPassword){this.view.showMessage("The passwords do not match.");return}this.view.setLoading("register-button",!0);try{const o=await this.api.post("/auth/register",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,role:e.role,clanId:e.clanId});this.router.goToDashboard(o.data.role)}catch(o){this.view.showMessage(o.message)}finally{this.view.setLoading("register-button",!1)}}}class Ue{constructor({api:e,router:o,view:s,user:n}){this.api=e,this.router=o,this.view=s,this.user=n,this.requests=[]}async init(){this.view.render(this.user),this.view.bindEvents({onCreate:e=>this.createRequest(e),onEdit:e=>this.editRequest(e),onDelete:e=>this.deleteRequest(e),onStatusChange:(e,o)=>this.changeStatus(e,o),onLogout:()=>this.logout()}),await this.loadRequests()}async loadRequests(){try{const e=await this.api.get("/mentorships");this.requests=e.data,this.view.renderRequests(this.requests)}catch(e){this.view.showMessage(e.message,"error")}}async createRequest(e){var o,s,n,r,a,c;(s=(o=this.view).setCreating)==null||s.call(o,!0);try{const d=await this.api.post("/mentorships",e);this.view.showMessage(d.message),(r=(n=this.view).resetForm)==null||r.call(n),await this.loadRequests()}catch(d){this.view.showMessage(d.message,"error")}finally{(c=(a=this.view).setCreating)==null||c.call(a,!1)}}async editRequest(e){const o=this.requests.find(r=>r.id===e);if(!o)return;const s=window.prompt("Edit the topic:",o.topic);if(s===null)return;const n=window.prompt("Edit the description:",o.description);if(n!==null)try{const r=await this.api.patch(`/mentorships/${e}`,{topic:s,description:n});this.view.showMessage(r.message),await this.loadRequests()}catch(r){this.view.showMessage(r.message,"error")}}async deleteRequest(e){if(window.confirm("Delete this pending mentorship request?"))try{const s=await this.api.delete(`/mentorships/${e}`);this.view.showMessage(s.message),await this.loadRequests()}catch(s){this.view.showMessage(s.message,"error")}}async changeStatus(e,o){try{const s=await this.api.patch(`/mentorships/${e}`,o);this.view.showMessage(s.message),await this.loadRequests()}catch(s){this.view.showMessage(s.message,"error")}}async logout(){try{await this.api.post("/auth/logout")}finally{this.router.navigate("/login")}}}class Gn{constructor({api:e,router:o,view:s,user:n}){this.api=e,this.router=o,this.view=s,this.user=n}async init(){try{const[e,o]=await Promise.all([this.api.get("/users/me"),this.api.get("/users/clans")]);this.user=e.data,this.view.render({user:this.user,clans:o.data}),this.view.bindEvents({onSave:s=>this.save(s),onLogout:()=>this.logout()})}catch{this.router.navigate("/login")}this.view.bindGoalEvents({onCreate:e=>this.createGoal(e),onToggle:(e,o)=>this.toggleGoal(e,o),onDelete:e=>this.deleteGoal(e)}),await this.loadGoals()}async loadGoals(){try{const e=await this.api.get("/users/me/goals");this.view.renderGoals(e.data)}catch(e){this.view.showGoalMessage(e.message,"error")}}async save(e){this.view.setLoading(!0);try{const o=await this.api.put("/users/me",e);this.user=o.data,this.view.showMessage(o.message)}catch(o){this.view.showMessage(o.message,"error")}finally{this.view.setLoading(!1)}}async createGoal(e){try{await this.api.post("/users/me/goals",e),this.view.clearGoalForm(),this.view.showGoalMessage("Goal created successfully.","success"),await this.loadGoals()}catch(o){this.view.showGoalMessage(o.message,"error")}}async toggleGoal(e,o){try{await this.api.patch(`/users/me/goals/${e}`,{completed:o}),await this.loadGoals()}catch(s){this.view.showGoalMessage(s.message,"error"),await this.loadGoals()}}async deleteGoal(e){try{await this.api.delete(`/users/me/goals/${e}`),this.view.showGoalMessage("Goal deleted successfully.","success"),await this.loadGoals()}catch(o){this.view.showGoalMessage(o.message,"error")}}async logout(){try{await this.api.post("/auth/logout")}finally{this.router.navigate("/login")}}}class Wn{constructor({root:e,api:o}){this.root=e,this.api=o,this.currentController=null}start(){if(window.addEventListener("hashchange",()=>this.render()),!window.location.hash){this.navigate("/login");return}this.render()}navigate(e){window.location.hash=`#${e}`}goToDashboard(e){this.navigate(e==="CODER"?"/coder":"/mentor")}async getSession(){try{return(await this.api.get("/auth/me")).data}catch{return null}}async render(){const e=window.location.hash.slice(1)||"/login",o=await this.getSession();if(["/login","/register"].includes(e)){if(o){this.goToDashboard(o.role);return}const s=new Ft(this.root);this.currentController=new _n({api:this.api,router:this,view:s,initialTab:e==="/register"?"register":"login"}),await this.currentController.init();return}if(!o){this.navigate("/login");return}if(e==="/coder"){if(o.role!=="CODER"){this.goToDashboard(o.role);return}const s=new Nn(this.root);this.currentController=new Ue({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}if(e==="/mentor"){if(o.role!=="MENTOR"){this.goToDashboard(o.role);return}const s=new Fn(this.root);this.currentController=new Ue({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}if(e==="/profile"){const s=new Vn(this.root);this.currentController=new Gn({api:this.api,router:this,view:s,user:o}),await this.currentController.init();return}this.root.innerHTML=`
      <section class="not-found">
        <h1>404</h1>
        <p>The requested page does not exist.</p>
        <a class="primary-button inline-button" href="#/login">Return</a>
      </section>
    `}}const Un=document.querySelector("#app"),Yn=new zt("/api"),Kn=new Wn({root:Un,api:Yn});Kn.start();
