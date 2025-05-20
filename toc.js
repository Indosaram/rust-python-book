// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="ch1-00.html"><strong aria-hidden="true">1.</strong> 러스트 시작하기</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch1-01.html"><strong aria-hidden="true">1.1.</strong> 파이썬 개발자가 러스트를 배워야 하는 이유</a></li><li class="chapter-item expanded "><a href="ch1-02.html"><strong aria-hidden="true">1.2.</strong> 러스트로 뭘 할 수 있나요?</a></li><li class="chapter-item expanded "><a href="ch1-03.html"><strong aria-hidden="true">1.3.</strong> 러스트 개발 환경 설정하기</a></li><li class="chapter-item expanded "><a href="ch1-04.html"><strong aria-hidden="true">1.4.</strong> 러스트 코드 실행하기</a></li></ol></li><li class="chapter-item expanded "><a href="ch2-00.html"><strong aria-hidden="true">2.</strong> 변수</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch2-01.html"><strong aria-hidden="true">2.1.</strong> 변수 선언하고 값 출력하기</a></li><li class="chapter-item expanded "><a href="ch2-02.html"><strong aria-hidden="true">2.2.</strong> 변수의 불변성</a></li><li class="chapter-item expanded "><a href="ch2-03.html"><strong aria-hidden="true">2.3.</strong> 섀도잉</a></li><li class="chapter-item expanded "><a href="ch2-04.html"><strong aria-hidden="true">2.4.</strong> 타입</a></li><li class="chapter-item expanded "><a href="ch2-05.html"><strong aria-hidden="true">2.5.</strong> 상수</a></li></ol></li><li class="chapter-item expanded "><a href="ch3-00.html"><strong aria-hidden="true">3.</strong> 함수</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch3-01.html"><strong aria-hidden="true">3.1.</strong> 함수 선언하기</a></li><li class="chapter-item expanded "><a href="ch3-02.html"><strong aria-hidden="true">3.2.</strong> 스코프</a></li><li class="chapter-item expanded "><a href="ch3-03.html"><strong aria-hidden="true">3.3.</strong> 익명 함수</a></li></ol></li><li class="chapter-item expanded "><a href="ch4-00.html"><strong aria-hidden="true">4.</strong> 흐름제어</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch4-01.html"><strong aria-hidden="true">4.1.</strong> if</a></li><li class="chapter-item expanded "><a href="ch4-02.html"><strong aria-hidden="true">4.2.</strong> for</a></li><li class="chapter-item expanded "><a href="ch4-03.html"><strong aria-hidden="true">4.3.</strong> while</a></li><li class="chapter-item expanded "><a href="ch4-04.html"><strong aria-hidden="true">4.4.</strong> loop</a></li><li class="chapter-item expanded "><a href="ch4-05.html"><strong aria-hidden="true">4.5.</strong> match</a></li></ol></li><li class="chapter-item expanded "><a href="ch5-00.html"><strong aria-hidden="true">5.</strong> 소유권</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch5-01.html"><strong aria-hidden="true">5.1.</strong> 컴퓨터의 메모리</a></li><li class="chapter-item expanded "><a href="ch5-02.html"><strong aria-hidden="true">5.2.</strong> 소유권 규칙</a></li><li class="chapter-item expanded "><a href="ch5-03.html"><strong aria-hidden="true">5.3.</strong> 클로저와 소유권</a></li></ol></li><li class="chapter-item expanded "><a href="ch6-00.html"><strong aria-hidden="true">6.</strong> 데이터 구조와 이터레이터</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch6-01.html"><strong aria-hidden="true">6.1.</strong> 자료형</a></li><li class="chapter-item expanded "><a href="ch6-02.html"><strong aria-hidden="true">6.2.</strong> 열거형</a></li><li class="chapter-item expanded "><a href="ch6-03.html"><strong aria-hidden="true">6.3.</strong> 이터레이터</a></li></ol></li><li class="chapter-item expanded "><a href="ch7-00.html"><strong aria-hidden="true">7.</strong> 구조체</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch7-01.html"><strong aria-hidden="true">7.1.</strong> 구조체</a></li><li class="chapter-item expanded "><a href="ch7-02.html"><strong aria-hidden="true">7.2.</strong> 트레이트</a></li></ol></li><li class="chapter-item expanded "><a href="ch8-00.html"><strong aria-hidden="true">8.</strong> 모듈과 크레이트</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch8-01.html"><strong aria-hidden="true">8.1.</strong> 러스트의 모듈 시스템</a></li><li class="chapter-item expanded "><a href="ch8-02.html"><strong aria-hidden="true">8.2.</strong> 모듈과 크레이트 사용해 보기</a></li></ol></li><li class="chapter-item expanded "><a href="ch9-00.html"><strong aria-hidden="true">9.</strong> 제네릭</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="(./ch9-01.html"><strong aria-hidden="true">9.1.</strong> 타입 파라미터</a></li><li class="chapter-item expanded "><a href="ch9-02.html"><strong aria-hidden="true">9.2.</strong> 제네릭과 트레이트</a></li><li class="chapter-item expanded "><a href="ch9-03.html"><strong aria-hidden="true">9.3.</strong> 미니프로젝트: cat 만들어보기</a></li><li class="chapter-item expanded "><a href="ch9-04.html"><strong aria-hidden="true">9.4.</strong> 라이프타임과 스태틱</a></li></ol></li><li class="chapter-item expanded "><a href="ch10-00.html"><strong aria-hidden="true">10.</strong> 예외 처리</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch10-01.html"><strong aria-hidden="true">10.1.</strong> panic!</a></li><li class="chapter-item expanded "><a href="ch10-02.html"><strong aria-hidden="true">10.2.</strong> Option 열거형</a></li><li class="chapter-item expanded "><a href="ch10-03.html"><strong aria-hidden="true">10.3.</strong> Result 열거형</a></li><li class="chapter-item expanded "><a href="ch10-04.html"><strong aria-hidden="true">10.4.</strong> 에러 로깅</a></li></ol></li><li class="chapter-item expanded "><a href="ch11-00.html"><strong aria-hidden="true">11.</strong> 스마트 포인터</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch11-01.html"><strong aria-hidden="true">11.1.</strong> Box 타입</a></li><li class="chapter-item expanded "><a href="ch11-02.html"><strong aria-hidden="true">11.2.</strong> Rc</a></li><li class="chapter-item expanded "><a href="ch11-03.html"><strong aria-hidden="true">11.3.</strong> RefCell</a></li></ol></li><li class="chapter-item expanded "><a href="ch12-00.html"><strong aria-hidden="true">12.</strong> 멀티스레딩</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch12-01.html"><strong aria-hidden="true">12.1.</strong> 스레드 스폰</a></li><li class="chapter-item expanded "><a href="ch12-02.html"><strong aria-hidden="true">12.2.</strong> 메모리 공유</a></li><li class="chapter-item expanded "><a href="ch12-03.html"><strong aria-hidden="true">12.3.</strong> 메시지 전달</a></li></ol></li><li class="chapter-item expanded "><a href="ch13-00.html"><strong aria-hidden="true">13.</strong> 비동기 프로그래밍</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch13-01.html"><strong aria-hidden="true">13.1.</strong> 비동기 프로그래밍이란?</a></li><li class="chapter-item expanded "><a href="ch13-02.html"><strong aria-hidden="true">13.2.</strong> tokio</a></li><li class="chapter-item expanded "><a href="ch13-03.html"><strong aria-hidden="true">13.3.</strong> rayon</a></li></ol></li><li class="chapter-item expanded "><a href="ch14-00.html"><strong aria-hidden="true">14.</strong> 테스트</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch14-01.html"><strong aria-hidden="true">14.1.</strong> 유닛 테스트</a></li><li class="chapter-item expanded "><a href="ch14-02.html"><strong aria-hidden="true">14.2.</strong> 문서 테스트</a></li><li class="chapter-item expanded "><a href="ch14-03.html"><strong aria-hidden="true">14.3.</strong> 모킹</a></li></ol></li><li class="chapter-item expanded "><a href="ch15-00.html"><strong aria-hidden="true">15.</strong> 파이썬 바인딩</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch15-01.html"><strong aria-hidden="true">15.1.</strong> 파이썬 가상환경 만들기</a></li><li class="chapter-item expanded "><a href="ch15-02.html"><strong aria-hidden="true">15.2.</strong> PyO3 프로젝트 생성하기</a></li><li class="chapter-item expanded "><a href="ch15-03.html"><strong aria-hidden="true">15.3.</strong> 파이썬에서 러스트 코드 실행해 보기</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
