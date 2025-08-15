---
title: "Latex TRY"
description: "This is from HTML HW3"
date: "Mar 22 2025"
---

### Q.5

1. By recalling the definition of VC Dimension, we learn that:  
   $d_{vc}(\mathcal{H})$ is the size of the largest set of points that $\mathcal{H}$ can shatter.

2. Consider a set of points $S$ of size $n = d_{vc}(\mathcal{H}_1 \cup \mathcal{H}_2)$, which can be shattered by $\mathcal{H}_1 \cup \mathcal{H}_2$.

3. For any dichotomy of $S$, there must exist an $h \in \mathcal{H}_1 \cup \mathcal{H}_2$ that can realize this dichotomy.

4. Split $S$ into two subsets:
	1. $S_1$ : points for which the dichotomy can be realized by hypotheses in $\mathcal{H}_1$
	2. $S_2$: points for which the dichotomy can only be realized by hypotheses in $\mathcal{H}_2$

5. Clearly, $|S_1| \leq d_{vc}(\mathcal{H}_1)$, because $\mathcal{H}_1$ can shatter at most $d_{vc}(\mathcal{H}_1)$ points.

7. Similarly, $|S_2| \leq d_{vc}(\mathcal{H}_2)$.

8. Since $S = S_1 \cup S_2$, by the triangle inequality, we have: 

$$
n = |S| = |S_1 \cup S_2| \leq |S_1| + |S_2| \leq d_{vc}(\mathcal{H}_1) + d_{vc}(\mathcal{H}_2)
$$

8. Therefore, $d_{vc}(\mathcal{H}_1 \cup \mathcal{H}_2) = n \leq d_{vc}(\mathcal{H}_1) + d_{vc}(\mathcal{H}_2)$.

### Q.6
For a given $\mathbf{x}$ , since now we suppose that a false negative is 10 times more important than a false positive. Hence, we have the following assumption:
1. if we predict $+1$, the penalty of the wrong expectation would be:
$$E_1 = 1 \cdot P(y=-1|\mathbf{x})$$
2. if we predict $-1$, the expected cost of misclassification would be: $$E_{-1} = 10 \cdot P(y=+1|\mathbf{x})$$
According to the description of the problem, we can construct following rules:
- We should predict +1 when $E_1 < E_{-1}$. That is, predict +1 when $P(y=-1|\mathbf{x}) < 10P(y=+1|\mathbf{x})$
- We should predict -1 when $E_1 > E_{-1}$. That is, predict +1 when $P(y=-1|\mathbf{x}) < 10P(y=+1|\mathbf{x})$

Hence, can further simplify this condition:

$$
\begin{aligned}&P(y=-1|\mathbf{x}) < 10P(y=+1|\mathbf{x}) \\&1 - P(y=+1|\mathbf{x}) < 10P(y=+1|\mathbf{x})\\&1 < 11P(y=+1|\mathbf{x})\\&P(y=+1|\mathbf{x}) > \frac{1}{11}\end{aligned}
$$

Therefore, we can renew our rule as:
- Predict +1 when $P(y=+1|\mathbf{x}) > \frac{1}{11}$
- Predict -1 when $P(y=+1|\mathbf{x}) < \frac{1}{11}$


Thus, we get $f_{\text{MKT}}(\mathbf{x}) = \text{sign}(P(y=+1|\mathbf{x}) - \frac{1}{11})$

What's more, we show that $\alpha = \frac{1}{11}$


### Q.7
According to the original definition 
$$
E^{(2)}_\text{out}(h) = \mathbb{E}_{\mathbf{x}\sim P(\mathbf{x}),y\sim P(y|\mathbf{x})}[\![h(\mathbf{x}) \neq y]\!]
$$
,it shows that we first take the expectation with respect to $\mathbf{x}$ and then take the expectation of y given $\mathbf{x}$.
Therefore, we can rewrite the equation as 
$$
E^{(2)}_\text{out}(h) = \mathbb{E}_{\mathbf{x}\sim P(\mathbf{x})}[\mathbb{E}_{y\sim P(y|\mathbf{x})}[\![h(\mathbf{x}) \neq y]\!]]
$$
As for $\mathbb{E}_{y\sim P(y|\mathbf{x})}[\![h(\mathbf{x}) \neq y]\!]$ , it is in fact $P(y\neq h(\mathbf{x})|\mathbf{x})$. It shows that for every fixed $\mathbf{x}$, the probability of $y \neq h(\mathbf{x})$
Hence, now we have 
$$
E^{(2)}_\text{out}(h) = \mathbb{E}_{\mathbf{x} \sim P(\mathbf{x})}[P(y\neq h(\mathbf{x})|\mathbf{x})]
$$
 Let
- $A$ be the event of "$y \neq h(x)$"
- $B$ is for "$f(x) = h(x)$"

Then, by the Law of total probability, we get 

$$
P(A|\mathbf{x}) = P(A|B,\mathbf{x})P(B|\mathbf{x}) + P(A|B^c,\mathbf{x})P(B^c|\mathbf{x})
$$

Note that $f(\mathbf{x}) = \arg\max_{y\in\{-1,+1\}}P(y|\mathbf{x}) = \text{sign}\left(P(y=+1|\mathbf{x}) - \frac{1}{2}\right)$, the definition implies that $f(x)$ always choose the most possible label.
That is to say, for any hypothesis $h$, if $h(x) \neq f(x)$, $h(x)$ choose the less possible label, which means the probability of misclassification must be greater than that of $f(x)$. Meanwhile, if $h(x) = f(x)$, then the possiility will be the same.
Thus, we show that  $$P(y\neq f(\mathbf{x})|\mathbf{x}) \leq P(y\neq h(\mathbf{x})|\mathbf{x})$$
holds for any $h$ and $\mathbf{x}$ by the definition of $f(\mathbf{x})$

Furthermore, we learn
- $P(A|B,\mathbf{x}) = P(y\neq f(\mathbf{x})|\mathbf{x})\quad \because y \neq h(\mathbf{x}) = f(\mathbf{x})$
- $P(A|B^c,\mathbf{x}) \geq P(y\neq f(\mathbf{x})|\mathbf{x})$
	- For $B$ (that is, $f(\mathbf{x}) = h(\mathbf{x})$)
		- $P(A|B,\mathbf{x}) = P(y\neq f(\mathbf{x})|\mathbf{x})$
	- For $B^c$ (that is, $f(\mathbf{x}) \neq h(\mathbf{x})$)
		- $\because P(y\neq f(\mathbf{x})|\mathbf{x}) \leq P(y\neq h(\mathbf{x})|\mathbf{x})$ 
		- $\therefore P(A|B^c,\mathbf{x}) = P(y\neq h(\mathbf{x})|f(\mathbf{x})\neq h(\mathbf{x}),\mathbf{x}) \geq P(y\neq f(\mathbf{x})|\mathbf{x})$

Hence,  

$$
\begin{aligned} &P(A | \mathbf{x}) = P(y \neq f(\mathbf{x})) \cdot P(f(x)) \\ &= h(\mathbf{x}) + P(A|B^c,\mathbf{x})\cdot P(B^c) \\ & \leq P(y \neq f(\mathbf{x})| \mathbf{x}) + P(B^c) \end{aligned}
$$

Note that 
-   $\mathbb{E}_{\mathbf{x}\sim P(\mathbf{x})}[P(y\neq f(\mathbf{x})|\mathbf{x})] = E^{(2)}_\text{out}(f)$
-   $\mathbb{E}_{\mathbf{x}\sim P(\mathbf{x})}[P(f(\mathbf{x})\neq h(\mathbf{x}))] = E^{(1)}_\text{out}(h)$

Therefore, 

$$
\begin{aligned}
   E^{(2)}_\text{out}(h) &= \mathbb{E}_{\mathbf{x} \sim P(\mathbf{x})}[P(y\neq h(\mathbf{x})|\mathbf{x})] \\
   \quad \\
   &\leq \mathbb{E}_{\mathbf{x}\sim P(\mathbf{x})}[P(y\neq f(\mathbf{x})|\mathbf{x})] + \mathbb{E}_{\mathbf{x}\sim P(\mathbf{x})}[P(f(\mathbf{x})\neq h(\mathbf{x}))] \\
   \quad \\
   &= E^{(2)}_\text{out}(f) + E^{(1)}_\text{out}(h)
   \end{aligned}
$$

Then, we proved the inequality 
$$E^{(2)}_\text{out}(h) \leq E^{(1)}_\text{out}(h) + E^{(2)}_\text{out}(f)$$

Thus we complete the proof.


### Q.8
According to Lecture 9 p.10, for the original data, we have 
$$w_{LIN} = (X^TX)^{-1}X^Ty$$
Now, change every $x_0$ to $1126$ instead of $1$. This implies that multiplying the first column of $X$ by $1126$. That is, 
$$
D = \begin{pmatrix}
   1126 & 0 & \cdots & 0 \\
   0 & 1 & \cdots & 0 \\
   \vdots & \vdots & \ddots & \vdots \\
   0 & 0 & \cdots & 1
   \end{pmatrix}
$$
Hence, the new matrix will be $DX$ and we have $w_{LUCKY}$:
$$
w_{LUCKY} = ((DX)^T(DX))^{-1}(DX)^Ty
$$

By expanding the equation, we learn that    
$$
w_{LUCKY} = (X^TD^TDX)^{-1}X^TD^Ty
$$
Note that $D$ is a diagonal matrix and thus has the following properties:
- $D^T = D$
- $D^TD = D^2$

Therefore,
$$
D^2 = \begin{pmatrix} 1126^2 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1\end{pmatrix}
$$
Hence, back to $w_{LUCKY}$, 
$$
\begin{aligned} w_{LUCKY} &= ((DX)^T(DX))^{-1}(DX)^Ty \\
\quad \\&= \left[ X^T (D^T D) X\right]^{-1} X^TD^Ty \\
\quad \\&= (X^TD^2X)^{-1}X^TDy  \qquad (\because D^T=D)\\ 
\quad \\&=\left[(X^TX)^{-1}D^{-2} \right]X^TDy \\
\quad \\ &=(X^TX)^{-1}X^TD^{-1}y\\
\end{aligned}
$$
As for  $w_{LIN} = (X^TX)^{-1}X^Ty$, w can rewrite $w_{lin}$ as:
$$
w_{LUCKY} = D^{-1}w_{LIN}
$$

Then, we have 
$$
w_{LIN} = Dw_{LUCKY}
$$
Hence, we complete the proof

### Q.9
Note that we have the new logistic function $\tilde{\theta}(s) = \frac{1}{1+\text{exp}(-s)}$.
First, we need to construct a likelihood. Hence, we must clarify that:
- $\tilde{h}(\mathbf{x}_n) = P(y_n = +1 | \mathbf{x}_n)$
- $1 - \tilde{h}(\mathbf{x}_n) = P(y_n = -1 | \mathbf{x}_n)$
Then, for a sample $(\mathbf{x}_n, y_n)$ where $y_n \in \{-1, +1\}$, we get the likelihood function as 
$$P(y_n|\mathbf{x}_n) = \tilde{h}(\mathbf{x}_n)^{\frac{y_n+1}{2}}(1-\tilde{h}(\mathbf{x}_n))^{\frac{1-y_n}{2}}$$

Second, according to p.11 on the handout, we have
$$
\ln L = \sum_{n=1}^N \frac{y_n+1}{2}\ln\tilde{h}(\mathbf{x}_n) + \frac{1-y_n}{2}\ln(1-\tilde{h}(\mathbf{x}_n))
$$
Third, construct the $E_{in}(\mathbf{w})$ as:
$$
\tilde{E}_{in}(\mathbf{w}) = -\frac{1}{N}\ln L = -\frac{1}{N}\sum_{n=1}^N \left[\frac{y_n+1}{2}\ln\tilde{h}(\mathbf{x}_n) + \frac{1-y_n}{2}\ln(1-\tilde{h}(\mathbf{x}_n))\right]
$$
Fourth, since we want to get the gradient, we must do the partial differentiation
$$
\frac{\partial \tilde{E}_{in}}{\partial \mathbf{w}} = -\frac{1}{N}\sum_{n=1}^N \left[\frac{y_n+1}{2}\frac{1}{\tilde{h}(\mathbf{x}_n)}\frac{\partial \tilde{h}(\mathbf{x}_n)}{\partial \mathbf{w}} - \frac{1-y_n}{2}\frac{1}{1-\tilde{h}(\mathbf{x}_n)}\frac{\partial \tilde{h}(\mathbf{x}_n)}{\partial \mathbf{w}}\right]
$$
$$
\frac{\partial \tilde{h}(\mathbf{x}_n)}{\partial \mathbf{w}} = \frac{1}{2}\frac{\partial}{\partial \mathbf{w}}\left(\frac{\mathbf{w}^T\mathbf{x}_n}{\sqrt{1+(\mathbf{w}^T\mathbf{x}_n)^2}}+1\right) = \frac{1}{2}\frac{\mathbf{x}_n}{(1+(\mathbf{w}^T\mathbf{x}_n)^2)^{3/2}}
$$
Last but not least, combine the results in step 4, and we get
$$
\nabla \tilde{E}_{in}(\mathbf{w}) = -\frac{1}{2N}\sum_{n=1}^N \left[\frac{y_n+1}{\tilde{h}(\mathbf{x}_n)} - \frac{1-y_n}{1-\tilde{h}(\mathbf{x}_n)}\right]\frac{\mathbf{x}_n}{(1+(\mathbf{w}^T\mathbf{x}_n)^2)^{3/2}}
$$
Hence, we complete the proof.
