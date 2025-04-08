# Transfer-app

### 한국 기차 환승 일정 세부 커스텀 앱

###### 2024.03

###### 1인 프로젝트

## 📌 Summary

웹으로 개발한 [Transfer](https://github.com/yponion/transfer) 서비스를 WebView를 활용해 React Native 앱으로 구현

## Troubleshooting

- `노치에 화면이 가려짐`

  실제 스마트폰에서 실행했을 때 노치와 하단바에 가려져 안전영역을 설정해 주었다.

- `안전영역 등 웹뷰 밖의 앱의 컬러가 바뀌지 않는 문제`

  기존 앱 컬러 설정을 웹으로 구현되어있어 웹뷰 내의 색상만 바뀌는 문제를 `onMessage` 로 웹뷰와 React Native 를 통신하여 색상을 통실시켜 주었다.

## 🔨 Technology Stack(s)

| Stack                                                                                                 | Version  | etc. |
| ----------------------------------------------------------------------------------------------------- | -------- | ---- |
| <img src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=React&logoColor=black">    | `0.76.7` | Expo |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"> | `^5.3.3` |
| <img src="https://img.shields.io/badge/Zustand-4d4942?style=flat&logoColor=white">                    | `^5.0.3` |

## ⚙️ Setup & Usage

```bash
# Install Packages
npm install

# Run Frontend Server
npm run start
```
