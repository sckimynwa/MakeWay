# MakeWay

어르신들의 경우 타임스퀘어나 신세계 백화점 같은 크고 넓은 실내 복합 플랫폼에서 길찾는데 굉장히 어려움을 겪으시는 경우가 많다.
실내에는 현 위치와 각 층별 구조를 알려주는 지도들이 층마다 비치되어 있지만, 사용자 친화적이지 않다. 사용자의 현위치와 시선과 지도가 일치하지 않고
애초에 지도 자체가 건축가, 설계자를 위한 구조이지 사용자 친화적인 구조가 아니기 때문이다. 따라서 이를 개선하여 누구든 실내에서 직관적으로 길을 찾아갈 수 있도록 
실내 내비게이션을 제작할 예정이다.

- 사용자 친화적인 지도 구조를 생각해야 한다.
- 평소에도 길을 찾는 데 어려움을 겪는 사용자들을 위해 직관적이고 입체적인 지도를 제공하고, 명시적인 방향을 제공해야 한다.

Module 1 - Current Location Detector (CLD)

- Wi-Fi signal
- Computer vision model + Natural Language Processing
- 간판을 찍으면 찍은 이미지를 전처리하여 컴퓨터 비전 모델이 텍스트로 바꿔줌. 


Module 2 - Search Engnine Optimization (SEO)

- Module 1 에서 바뀐 
- 처음에는 타임스퀘어 안에 있는 모든 가게들, 시설들에 대해서 데이터 저장, 나중에는 종합적으로 관리하기 위해서 데이터베이스 최적화도 필요함.


Module 3 - PathFinder (PF)

- Module 1에서 출발지점 정하고, Module 2에서 도착지점을 정하면, 최단거리를 찾아 노드들의 배열을 리턴한다.


Module 4 - 3D Navigation Mapping (3NM)

- Module 3 에서 찾은 최단 경로를 3D환경에 매핑하여 네비게이션을 만들어준다. 


### Reference

#### Module 1 : CLD

> https://d2.naver.com/helloworld/8344782
