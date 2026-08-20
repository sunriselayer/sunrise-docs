---
title: Consensus Nodes
description: "Data Availability Layer: In addition to standard consensus tasks, Validator Nodes on Sunrise are responsible for verifying data for the Data Availability (DA) layer. This requir..."
---

## Overview

- [Validator node](/run-a-sunrise-node/types/consensus/validator-node): This type of node participates in consensus by producing and voting on blocks.
- [Full consensus node](/run-a-sunrise-node/types/consensus/full-consensus-node): A sunrise-app Full node to sync blockchain history.

:::note
**Data Availability Layer**: In addition to standard consensus tasks, Validator Nodes on Sunrise are responsible for verifying data for the Data Availability (DA) layer. This requires running additional daemons alongside the main `sunrised` process. See the [validator documentation](/build/validators) for more details.
:::

### Requirements

| Type           | CPU    | Architecture | Mem  | Disk       | Bandwidth |
| -------------- | ------ | ------------ | ---- | ---------- | --------- |
| Validator      | 6 Core | x86_64       | 8 GB | 500 GB SSD | 1 Gbps    |
| Full Consensus | 4 Core | x86_64       | 8 GB | 250 GB SSD | 1 Gbps    |
