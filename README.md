# 25조의 Issue Tracker

## 🛺 [HomePage](http://49.50.172.69)
> 깃헙 Issue Tracker 클론 프로젝트 배포 사이트입니다.

## 📖 [WIKI Home](https://github.com/boostcamp-2020/IssueTracker-25/wiki)
> 그라운드 룰, 주차별 계획, 데일리스크럼 그리고 치열한 회의 내용을 기록합니다.
>

[그라운드 룰](https://github.com/boostcamp-2020/IssueTracker-25/wiki/팀프로젝트-그라운드-룰)


[일정 계획](https://github.com/boostcamp-2020/IssueTracker-25/wiki/일정-계획)

[Backlog](https://github.com/boostcamp-2020/IssueTracker-25/projects)



## 👬 Member
> 25조의 핵심 브레인

👨‍🏫 **J209_최창희** [**@changheedev**](https://github.com/changheedev)

👨‍🌾 **J081_박승환** [**@rolled-potatoes**](https://github.com/rolled-potatoes)

😺 **J148_이수경** [**@LeeSuKyeong**](https://github.com/LeeSuKyeong)

🐑 **J114_양예진**[**@yejineee**](https://github.com/yejineee)

## 🔥 배포
> 배포 전략
- 배포를 위한 **버전 태그**를 붙이면 자동으로 배포가 진행된다.
- **테스트에 통과**된 커밋만 배포될 수 있다.
- 배포 Flow의 **모든 단계에 통과**해야 배포된다.
> 배포 Flow
1. **버전 태그 등록**
마스터 브랜치에 `버전 태그` 를 등록하면 작성해놓은 `깃헙 액션`이 실행 
[**work flow**](https://github.com/boostcamp-2020/IssueTracker-25/blob/master/.github/workflows/deploy.yml)

2. **테스트**
깃헙 액션에서 테스트 코드를 실행

3. **빌드**
`도커 이미지`로 빌드하고 도커 허브에 푸쉬

4. **배포** 
배포 서버에 SSH 접속을 하여 스크립트를 실행
-> 도커 이미지를 업데이트하고 재실행

👉 [**배포 결과 예시**](https://github.com/boostcamp-2020/IssueTracker-25/runs/1324874733?check_suite_focus=true)

## 📥 Github PR

- 리뷰어는 팀원 **모두**를 지정해야 한다. 
- **2명 이상**이 리뷰와 승인 후 merge할 수 있다.
- 깔끔한 커밋 관리를 위하여 **squash merge**를 한다.

## 🧑🏻‍💻 Project
> ERD

![erd_image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d71a75c5-4cac-463b-8550-f995c837d0af/Copy_of_undefined_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201028T095500Z&X-Amz-Expires=86400&X-Amz-Signature=02ba40fb977db3b381d6c55d02333ad5254799c365bf9f40c4a30366a00a2946&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Copy_of_undefined_%281%29.png%22)






