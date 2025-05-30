##   A s s i g n m e n t :   C R U D   A P I 
 
 
 
 # #   D e s c r i p t i o n 
 
 
 
 Y o u r   t a s k   i s   t o   i m p l e m e n t   s i m p l e   C R U D   A P I   u s i n g   i n - m e m o r y   d a t a b a s e   u n d e r n e a t h . 
 
 # #   T e c h n i c a l   r e q u i r e m e n t s 
 
 
 
 -   T a s k   c a n   b e   i m p l e m e n t e d   o n   J a v a s c r i p t   o r   T y p e s c r i p t 
 
 -   O n l y   ` n o d e m o n ` ,   ` d o t e n v ` ,   ` c r o s s - e n v ` ,   ` t y p e s c r i p t ` ,   ` t s - n o d e ` ,   ` t s - n o d e - d e v ` ,   ` e s l i n t `   a n d   i t s   p l u g i n s ,   ` w e b p a c k - c l i ` ,   ` w e b p a c k `   a n d   i t s   p l u g i n s ,   ` p r e t t i e r ` ,   ` u u i d ` ,   ` @ t y p e s / * `   a s   w e l l   a s   l i b r a r i e s   u s e d   f o r   t e s t i n g   a r e   a l l o w e d 
 
 -   U s e   2 2 . x . x   v e r s i o n   ( 2 2 . 9 . 0   o r   u p p e r )   o f   N o d e . j s 
 
 -   P r e f e r   a s y n c h r o n o u s   A P I   w h e n e v e r   p o s s i b l e 
 
 
 
 # #   I m p l e m e n t a t i o n   d e t a i l s 
 
 
 
 1 .   I m p l e m e n t e d   e n d p o i n t   ` a p i / u s e r s ` : 
 
         -   * * G E T * *   ` a p i / u s e r s `   i s   u s e d   t o   g e t   a l l   p e r s o n s 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 2 0 0 * *   a n d   a l l   u s e r s   r e c o r d s 
 
         -   * * G E T * *   ` a p i / u s e r s / { u s e r I d } `   
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 2 0 0 * *   a n d   r e c o r d   w i t h   ` i d   = = =   u s e r I d `   i f   i t   e x i s t s 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 0 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   ` u s e r I d `   i s   i n v a l i d   ( n o t   ` u u i d ` ) 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 4 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   r e c o r d   w i t h   ` i d   = = =   u s e r I d `   d o e s n ' t   e x i s t 
 
         -   * * P O S T * *   ` a p i / u s e r s `   i s   u s e d   t o   c r e a t e   r e c o r d   a b o u t   n e w   u s e r   a n d   s t o r e   i t   i n   d a t a b a s e 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 2 0 1 * *   a n d   n e w l y   c r e a t e d   r e c o r d 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 0 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   r e q u e s t   ` b o d y `   d o e s   n o t   c o n t a i n   * * r e q u i r e d * *   f i e l d s 
 
         -   * * P U T * *   ` a p i / u s e r s / { u s e r I d } `   i s   u s e d   t o   u p d a t e   e x i s t i n g   u s e r 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h `   s t a t u s   c o d e `   * * 2 0 0 * *   a n d   u p d a t e d   r e c o r d 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h `   s t a t u s   c o d e `   * * 4 0 0 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   ` u s e r I d `   i s   i n v a l i d   ( n o t   ` u u i d ` ) 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h `   s t a t u s   c o d e `   * * 4 0 4 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   r e c o r d   w i t h   ` i d   = = =   u s e r I d `   d o e s n ' t   e x i s t 
 
         -   * * D E L E T E * *   ` a p i / u s e r s / { u s e r I d } `   i s   u s e d   t o   d e l e t e   e x i s t i n g   u s e r   f r o m   d a t a b a s e 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 2 0 4 * *   i f   t h e   r e c o r d   i s   f o u n d   a n d   d e l e t e d 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 0 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   ` u s e r I d `   i s   i n v a l i d   ( n o t   ` u u i d ` ) 
 
                 -   S e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 4 * *   a n d   c o r r e s p o n d i n g   m e s s a g e   i f   r e c o r d   w i t h   ` i d   = = =   u s e r I d `   d o e s n ' t   e x i s t 
 
 2 .   U s e r s   a r e   s t o r e d   a s   ` o b j e c t s `   t h a t   h a v e   f o l l o w i n g   p r o p e r t i e s : 
 
         -   ` i d `     u n i q u e   i d e n t i f i e r   ( ` s t r i n g ` ,   ` u u i d ` )   g e n e r a t e d   o n   s e r v e r   s i d e 
 
         -   ` u s e r n a m e `     u s e r ' s   n a m e   ( ` s t r i n g ` ,   * * r e q u i r e d * * ) 
 
         -   ` a g e `     u s e r ' s   a g e   ( ` n u m b e r ` ,   * * r e q u i r e d * * ) 
 
         -   ` h o b b i e s `     u s e r ' s   h o b b i e s   ( ` a r r a y `   o f   ` s t r i n g s `   o r   e m p t y   ` a r r a y ` ,   * * r e q u i r e d * * ) 
 
 3 .   R e q u e s t s   t o   n o n - e x i s t i n g   e n d p o i n t s   ( e . g .   ` s o m e - n o n / e x i s t i n g / r e s o u r c e ` )   s h o u l d   b e   h a n d l e d   ( s e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 4 0 4 * *   a n d   c o r r e s p o n d i n g   h u m a n - f r i e n d l y   m e s s a g e ) 
 
 4 .   E r r o r s   o n   t h e   s e r v e r   s i d e   t h a t   o c c u r   d u r i n g   t h e   p r o c e s s i n g   o f   a   r e q u e s t   s h o u l d   b e   h a n d l e d   a n d   p r o c e s s e d   c o r r e c t l y   ( s e r v e r   s h o u l d   a n s w e r   w i t h   ` s t a t u s   c o d e `   * * 5 0 0 * *   a n d   c o r r e s p o n d i n g   h u m a n - f r i e n d l y   m e s s a g e ) 
 
 5 .   V a l u e   o f   ` p o r t `   o n   w h i c h   a p p l i c a t i o n   i s   r u n n i n g   s h o u l d   b e   s t o r e d   i n   ` . e n v `   f i l e 
 
 6 .   T h e r e   s h o u l d   b e   2   m o d e s   o f   r u n n i n g   a p p l i c a t i o n   ( * * d e v e l o p m e n t * *   a n d   * * p r o d u c t i o n * * ) : 
 
         -   T h e   a p p l i c a t i o n   i s   r u n   i n   d e v e l o p m e n t   m o d e   u s i n g   ` n o d e m o n `   o r   ` t s - n o d e - d e v `   ( t h e r e   i s   a   ` n p m `   s c r i p t   ` s t a r t : d e v ` ) 
 
         -   T h e   a p p l i c a t i o n   i s   r u n   i n   p r o d u c t i o n   m o d e   ( t h e r e   i s   a   ` n p m `   s c r i p t   ` s t a r t : p r o d `   t h a t   s t a r t s   t h e   b u i l d   p r o c e s s   a n d   t h e n   r u n s   t h e   b u n d l e d   f i l e ) 
 
 7 .   T h e r e   c o u l d   b e   s o m e   t e s t s   f o r   A P I   ( n o t   l e s s   t h a n   * * 3 * *   s c e n a r i o s ) .   E x a m p l e   o f   t e s t   s c e n a r i o : 
 
         1 .   G e t   a l l   r e c o r d s   w i t h   a   ` G E T `   ` a p i / u s e r s `   r e q u e s t   ( a n   e m p t y   a r r a y   i s   e x p e c t e d ) 
 
         2 .   A   n e w   o b j e c t   i s   c r e a t e d   b y   a   ` P O S T `   ` a p i / u s e r s `   r e q u e s t   ( a   r e s p o n s e   c o n t a i n i n g   n e w l y   c r e a t e d   r e c o r d   i s   e x p e c t e d ) 
 
         3 .   W i t h   a   ` G E T `   ` a p i / u s e r / { u s e r I d } `   r e q u e s t ,   w e   t r y   t o   g e t   t h e   c r e a t e d     r e c o r d   b y   i t s   ` i d `   ( t h e   c r e a t e d   r e c o r d   i s   e x p e c t e d ) 
 
         4 .   W e   t r y   t o   u p d a t e   t h e   c r e a t e d   r e c o r d   w i t h   a   ` P U T `   ` a p i / u s e r s / { u s e r I d } ` r e q u e s t   ( a   r e s p o n s e   i s   e x p e c t e d   c o n t a i n i n g   a n   u p d a t e d   o b j e c t   w i t h   t h e   s a m e   ` i d ` ) 
 
         5 .   W i t h   a   ` D E L E T E `   ` a p i / u s e r s / { u s e r I d } `   r e q u e s t ,   w e   d e l e t e   t h e   c r e a t e d   o b j e c t   b y   ` i d `   ( c o n f i r m a t i o n   o f   s u c c e s s f u l   d e l e t i o n   i s   e x p e c t e d ) 
 
         6 .   W i t h   a   ` G E T `   ` a p i / u s e r s / { u s e r I d } `   r e q u e s t ,   w e   a r e   t r y i n g   t o   g e t   a   d e l e t e d   o b j e c t   b y   ` i d `   ( e x p e c t e d   a n s w e r   i s   t h a t   t h e r e   i s   n o   s u c h   o b j e c t ) 
 
 8 .   T h e r e   c o u l d   b e   i m p l e m e n t e d   h o r i z o n t a l   s c a l i n g   f o r   a p p l i c a t i o n ,   t h e r e   s h o u l d   b e   ` n p m `   s c r i p t   ` s t a r t : m u l t i `   t h a t   s t a r t s   m u l t i p l e   i n s t a n c e s   o f   y o u r   a p p l i c a t i o n   u s i n g   t h e   N o d e . j s   ` C l u s t e r `   A P I   ( e q u a l   t o   t h e   n u m b e r   o f   a v a i l a b l e   p a r a l l e l i s m   -   1   o n   t h e   h o s t   m a c h i n e ,   e a c h   l i s t e n i n g   o n   p o r t   P O R T   +   n )   w i t h   a   * * l o a d   b a l a n c e r * *   t h a t   d i s t r i b u t e s   r e q u e s t s   a c r o s s   t h e m   ( u s i n g   R o u n d - r o b i n   a l g o r i t h m ) .   F o r   e x a m p l e :   a v a i l a b l e   p a r a l l e l i s m   i s   4 ,   ` P O R T `   i s   4 0 0 0 .   O n   r u n   ` n p m   r u n   s t a r t : m u l t i `   i t   w o r k s   f o l l o w i n g   w a y 
 
 -   O n   ` l o c a l h o s t : 4 0 0 0 / a p i `   l o a d   b a l a n c e r   i s   l i s t e n i n g   f o r   r e q u e s t s 
 
 -   O n   ` l o c a l h o s t : 4 0 0 1 / a p i ` ,   ` l o c a l h o s t : 4 0 0 2 / a p i ` ,   ` l o c a l h o s t : 4 0 0 3 / a p i `   w o r k e r s   a r e   l i s t e n i n g   f o r   r e q u e s t s   f r o m   l o a d   b a l a n c e r 
 
 -   W h e n   u s e r   s e n d s   r e q u e s t   t o   ` l o c a l h o s t : 4 0 0 0 / a p i ` ,   l o a d   b a l a n c e r   s e n d s   t h i s   r e q u e s t   t o   ` l o c a l h o s t : 4 0 0 1 / a p i ` ,   n e x t   u s e r   r e q u e s t   i s   s e n t   t o   ` l o c a l h o s t : 4 0 0 2 / a p i `   a n d   s o   o n . 
 
 -   A f t e r   s e n d i n g   r e q u e s t   t o   ` l o c a l h o s t : 4 0 0 3 / a p i `   l o a d   b a l a n c e r   s t a r t s   f r o m   t h e   f i r s t   w o r k e r   a g a i n   ( s e n d s   r e q u e s t   t o   ` l o c a l h o s t : 4 0 0 1 / a p i ` ) 
 
 -   S t a t e   o f   d b   s h o u l d   b e   c o n s i s t e n t   b e t w e e n   d i f f e r e n t   w o r k e r s ,   f o r   e x a m p l e : 
 
         1 .   F i r s t   ` P O S T `   r e q u e s t   a d d r e s s e d   t o   ` l o c a l h o s t : 4 0 0 1 / a p i `   c r e a t e s   u s e r 
 
         2 .   S e c o n d   ` G E T `   r e q u e s t   a d d r e s s e d   t o   ` l o c a l h o s t : 4 0 0 2 / a p i `   s h o u l d   r e t u r n   c r e a t e d   u s e r 
 
         3 .   T h i r d   ` D E L E T E `   r e q u e s t   a d d r e s s e d   t o   ` l o c a l h o s t : 4 0 0 3 / a p i `   d e l e t e s   c r e a t e d   u s e r 
 
         4 .   F o u r t h   ` G E T `   r e q u e s t   a d d r e s s e d   t o   ` l o c a l h o s t : 4 0 0 1 / a p i `   s h o u l d   r e t u r n   * * 4 0 4 * *   s t a t u s   c o d e   f o r   c r e a t e d   u s e r 
