---
sidebar_position: 2001
---

# Characters

Characters are organized per Element.

## Elements

import DocCardList from '@theme/DocCardList';

<DocCardList />

## All Characters

import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={
    useCurrentSidebarCategory().items
        .flatMap(i => i.type == "category" ? i.items : [])
        .sort((a, b) => a.label.localeCompare(b.label))
}/> 
